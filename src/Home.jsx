import Header from "./components/Header";
import MyComponent from "./myComponent";

const Home = () => {
  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <Header />
        <MyComponent />
      </div>
    </>
  );
};

export default Home;
