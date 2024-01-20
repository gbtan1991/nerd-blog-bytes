// MyComponent.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
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

  console.log(jsonData);
  return (
    <div className="text-white">
      <h1>My React Component</h1>

      {hasData ? (
        jsonData.map((blog, index) => (
          <p key={index}>{blog.title}</p>
        ))
      ) : 
        <p>Loading</p>
      }
      {/* {hasData ? 
        {jsonData.map((blog, index) => {
            
            return    <p key={index}></p>
        }
            
            

        )

        
      : (
        <p>Loading JSON data...</p>
      )}} */}
    </div>
  );
};

export default MyComponent;
