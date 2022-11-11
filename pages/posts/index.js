import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/post-util";
import Head from "next/head";


function AllPostsPage(props) {
  const { posts } = props;
  return (

    <div>
      <Head>
        <title>all post</title>
        <meta
          name="description"
          content="all post i posted for study"
        ></meta>
      </Head>
      <div>
        <AllPosts posts={posts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
