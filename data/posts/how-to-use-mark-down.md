---
title: "How to use Mark-down"
date: "2022-11-17"
author: "ms"
image: Markdown-mark.png
description: description
isFeatured: true
type: react
---

# Nextjs 에서 마크다운을 어떻게 사용할까?

    블로그 글을 쓰는데 있어, 편하게 사용 가능한 마크다운의 문법을 슬쩍 알아본다.

## <기본 마크다운 문법>

#### 1.글머리

    # : H1
    ## : H2
    ...
    ###### : H6

#### 2. 링크사용

    [link](URL주소)
        EX) [link](https://google.com)

### 3. 컨텐츠, 헤더 나누기

    ---

    postid: "..."
    date: "..."
    description: "..."

    ---

    this is content

### 4. 코드

    ---.js  (이건 사용 언어에 따라다름)

    const xx = ...
    function xx(){
        ....
    }
    ---

### 5.수평선

    ***

    - - -

### 6.이미지

    ![alt](src)

## <마크다운을 react 에서 읽히게 하기>

[react-mark-down](https://www.npmjs.com/package/react-markdown#appendix-a-html-in-markdown)

[gray-matter](https://www.npmjs.com/package/gray-**matter**)

    1. gray-matter 를 통해, header와 content를 나누고

    2. content를 뽑아서, react-markdown 태그로 감싸준다.

    3. 짜잔-

### <gray-matter 로 content, header 뽑기>

```.js
import matter from "gray-matter";

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

```

### <전체 post 도 전부 이 형식으로 만들어주기>

```.js
export function getAllPosts() {
const allFiles = fs.readdirSync(postsDirPath); // 전체 파일 갯수를 위한 [폴더 안의 모든 파일 뒤지기]

const allPosts = allFiles.map((filename) => getSinglePost(filename));

const sortedPosts = allPosts.sort((postA, postB) =>
postA.date > postB.date ? -1 : 1
);

return sortedPosts;
}
```

### <react-markdown> 을 사용해 읽기

    import ReactMarkdown from "react-markdown";

    ...

    return (
    <article className={styles.content}>
        <PostHeader posts={posts} />
        <ReactMarkdown components={myComponents}>{posts.content}</ReactMarkdown>
    </article>
    );

### <이미지는 react 의 Image 함수로 사용되게 "오버라이드(overwrite)">

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
