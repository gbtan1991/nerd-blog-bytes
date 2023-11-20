import React, { useState, useEffect, } from "react";
import BlogCarousel from "./BlogCarousel.jsx";
import Error404 from "./Error404.jsx";
import useFetch from "./useFetch.jsx";
import Loading from "./Loading.jsx";


const Home = () => {
  const { data: blogs, loading, error, setData: setBlogs} = useFetch('http://localhost:8000/blogs')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };


  return (
    <div>
      { error &&  <Error404 error={error}/>}
      { loading && <Loading />}
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
