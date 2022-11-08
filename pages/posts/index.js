import AllPosts from "../../components/posts/all-posts";

const dummyData = [
  {
    title: "ms",
    image: "/src/pageImages/IMG_5584.JPG",
    id: "e1",
    date: "2020-10-05",
    description: "this is des",
  },
  {
    title: "js",
    image: "/src/pageImages/IMG_5584.JPG",
    id: "e2",
    date: "2020-11-08",
    description: "this is des",
  },
  {
    title: "rs",
    image: "/src/pageImages/IMG_5584.JPG",
    id: "e3",
    date: "2020-10-23",
    description: "this is des",
  },
  {
    title: "ks",
    image: "/src/pageImages/IMG_5584.JPG",
    id: "e4",
    date: "2021-03-12",
    description: "this is des",
  },
];

function AllPostsPage() {
  return (
    <div>
      <div>
        <AllPosts posts={dummyData} />
      </div>
    </div>
  );
}
export default AllPostsPage;
