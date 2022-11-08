import Welcome from "../components/homepage-components/welcome";
import FeacturePosts from "../components/homepage-components/feature-post";

function HomePage(props) {
  const { dummyData } = props;
  return (
    <div>
      <div>
        <Welcome />
        <FeacturePosts posts={dummyData} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
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
  return {
    props: { dummyData },
  };
}

export default HomePage;
