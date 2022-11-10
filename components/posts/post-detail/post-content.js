import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import styles from "./post-content.module.css";
import Image from "next/image";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { posts } = props;

  const myComponents = {
    img(image) {
      return (
        <Image
          src={`/src/posts/${posts.postid}/${image.src}`}
          alt={image.alt}
          width={300}
          height={300}
        />
      );
    },
    code(code) {
      return (
        <SyntaxHighlighter
          language={code.language}
          style={dark}
          children={code.children}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader posts={posts} />
      <ReactMarkdown components={myComponents}>{posts.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
