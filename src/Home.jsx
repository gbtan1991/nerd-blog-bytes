import Header from "./components/Header";
import BlogsList from "./components/BlogsList";

const Home = () => {
  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <Header />
        <BlogsList />
      </div>
    </>
  );
};

export default Home;
