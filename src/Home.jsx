import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import BlogCarousel from "./BlogCarousel.jsx";
import Error404 from "./Error404.jsx";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if(!res.ok){
          throw Error("Couldn't connect to the resources");
        }
        return res.json();
        
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        setError(null);
        
      })
      .catch(error => {
        console.log("Error fetching data:", error);
        setLoading(false);
        setError(error.message)
      }, 1000);
  }, [setError]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };


  return (
    <div>
      <Header />
      { error &&  <Error404 error={error}/>}
      { loading && <div>Loading...</div>}
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
