import Welcome from "../components/homepage-components/welcome";
import FeacturePosts from "../components/homepage-components/feature-post";
import { getFeaturedPost } from "../helper/post-util";
import Head from "next/head";

function HomePage(props) {
  const { posts } = props;
  return (
    <div>
      <Head>
        <title> Ms React Blog</title>
        <meta
          name="description"
          content="i Post my study for react and javascript"
        ></meta>
      </Head>
      <div>
        <Welcome />
        <FeacturePosts posts={posts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
