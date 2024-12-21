import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/Home-Page/Hero";
import FeaturedPosts from "../components/Home-Page/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Social from "../components/Social/Social";
import About from "../components/About/About";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>לומדים בכיף - הבלוג שלך לתכנות 📚</title>
        <meta
          name="description"
          content="בבלוג הזה אני משתף תכנים על פיתוח אתרים ותכנות, עם דגש על פשטות וגישה מדויקת לעולם הפיתוח! 💡💻"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
      <About />
      <Social />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
