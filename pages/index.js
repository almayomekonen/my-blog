import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/Home-Page/Hero";
import FeaturedPosts from "../components/Home-Page/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my Blog!📚</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
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
