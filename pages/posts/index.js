import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/post-util";

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <div>
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
