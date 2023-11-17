import React, { useState, useEffect, } from "react";
import Header from "./Header.jsx";
import BlogCarousel from "./BlogCarousel.jsx";
import Error404 from "./Error404.jsx";
import useFetch from "./useFetch.jsx";


const Home = () => {
  const { data: blogs, loading, error, setData: setBlogs} = useFetch('http://localhost:8000/blogs')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };


  return (
    <div>
      <Header />
      { error &&  <Error404 error={error}/>}
      { loading && <div className="flex items-center justify-center h-screen">
      <svg className="w-16 animate-rotate" viewBox="25 25 50 50">
        <circle
          className="stroke-current text-transparent stroke-2 stroke-dasharray-1-200 stroke-dashoffset-0 stroke-linecap-round animate-dash"
          r="20"
          cy="50"
          cx="50"
        ></circle>
      </svg>
    </div>}
      {blogs && (
        <BlogCarousel 
          blogs={blogs}
          title="Recent Blogs" 
          handleDelete={handleDelete}
         />
      )}
    
    </div>
  );
};

export default Home;
