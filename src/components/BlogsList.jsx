
import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

const BlogsList = () => {
  const [jsonData, setJsonData] = useState(null);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    // Fetch JSON data from the GitHub Gist using Axios
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_REACT_APP_JSON_DATA_URL
        );
        setJsonData(data.blogs);
        setHasData(true);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render
  
  console.log(jsonData)
  return (
    <div className="text-white mt-[56px] lg:mt-[121px]">
      <h1>Blogs</h1>
      <ul>
      {hasData ? (
        jsonData.map((blog, index) => (
          <li key={index}>
            <h2>{blog.title}</h2>
            <h3>{blog.author.name}</h3>
            <p>{blog.publishedDate}</p>
            {blog.tags.map((tag, tagIndex) => (
              <div key={tagIndex}>
                <span>{tag}</span>
              </div>

            ))}
            
          </li>
        ))
      ) : 
        <p>Loading</p>
      }
</ul>
    </div>
  );
};

export default BlogsList;
