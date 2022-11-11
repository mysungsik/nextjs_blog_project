import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "data", "posts");

export function getAllPostId() {
  return fs
    .readdirSync(postsDirPath)
    .map((filename) => filename.replace(/\.md$/, ""));
}

export function getSinglePost(fileID) {
  const postName = fileID.replace(/\.md$/, "");
  const filePath = path.join(postsDirPath, `${postName}.md`);
  const singlePost = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(singlePost);

  const postData = {
    postid: postName,
    ...data,
    content: content,
  };
  return postData;
}

export function getAllPosts() {
  const allFiles = fs.readdirSync(postsDirPath); // 전체 파일 갯수를 위한 [폴더 안의 모든 파일 뒤지기]

  const allPosts = allFiles.map((filename) => getSinglePost(filename));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getSpecificType(postType) {
  const specificType = getAllPosts().filter((post) => post.type === postType);

  return specificType;
}

export function getFeaturedPost() {
  const feadturedPosts = getAllPosts().filter((post) => post.isFeatured);
  return feadturedPosts;
}
