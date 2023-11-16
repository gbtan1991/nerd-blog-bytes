import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import BlogCarousel from "./BlogCarousel.jsx";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
        
      

      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
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
