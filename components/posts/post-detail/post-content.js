import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import styles from "./post-content.module.css";
import Image from "next/image";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/prism/dark";

import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("js", js);

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
