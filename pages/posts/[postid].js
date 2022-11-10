import PostContent from "../../components/posts/post-detail/post-content";
import { getAllPostId, getSinglePost } from "../../helper/post-util";

function PostDetailPage(props) {
  const { postData } = props;
  return (
    <div>
      <PostContent posts={postData} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { postid } = context.params;

  const fileData = getSinglePost(postid);

  return {
    props: {
      postData: fileData,
    },
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const allFileData = getAllPostId();

  const paramsData = allFileData.map((filedata) => ({
    params: { postid: filedata },
  }));

  return {
    paths: paramsData,
    fallback: false,
  };
}

export default PostDetailPage;
