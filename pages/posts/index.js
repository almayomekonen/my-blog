import React, { Fragment } from "react";
import AllPosts from "../../components/Posts/All-Posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta
          name="decription"
          content="A list of all programming-related posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allposts = getAllPosts();

  return {
    props: {
      posts: allposts,
    },
  };
}
