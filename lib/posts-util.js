import fs from "fs";
import path from "path";
import matter from "gray-matter";

// cwd = current working directory
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // Define the order of preferred categories
  const priorityOrder = ["css", "html", "react", "javascript"];

  const getPriority = (post) => {
    for (let i = 0; i < priorityOrder.length; i++) {
      if (post.slug.toLowerCase().includes(priorityOrder[i])) {
        return i;
      }
    }
    return priorityOrder.length;
  };

  const sortedPosts = allPosts.sort((postA, postB) => {
    const priorityA = getPriority(postA);
    const priorityB = getPriority(postB);

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    return postA.date > postB.date ? -1 : 1;
  });

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
