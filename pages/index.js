import Welcome from "../components/homepage-components/welcome";
import FeacturePosts from "../components/homepage-components/feature-post";
import { getFeaturedPost } from "../helper/post-util";
import Notification from "../components/ui/notification";
function HomePage(props) {
  const { posts } = props;
  return (
    <div>
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
