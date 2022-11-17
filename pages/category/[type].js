import CategoryPosts from "../../components/categorypage-components/categoty-post";
import { getSpecificType } from "../../helper/post-util";

function SpecificType(props) {
  const { posts } = props;

  return (
    <div>
      <CategoryPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { type } = context.params;

  const specificData = getSpecificType(type);

  return {
    props: { posts: specificData },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { type: "react" } }],
    fallback: "blocking",
  };
}

export default SpecificType;
