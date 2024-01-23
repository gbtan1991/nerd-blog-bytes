import Header from "./components/Header";
import BlogsList from "./components/BlogsList";

const Home = () => {
  return (
    <>
      <div className="bg-neutral-900 h-full lg:h-screen w-screen overflow-hidden">
        <Header />
        <BlogsList />
      </div>
    </>
  );
};

export default Home;
