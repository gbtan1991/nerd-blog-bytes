import React from "react";
import useFetch from "../useFetch";

const BlogsList = () => {
  const {
    data,
    isPending,
    error,
  } = useFetch(import.meta.env.VITE_REACT_APP_JSON_DATA_URL);

  return (
    <div className="text-white mt-[56px] lg:mt-[121px]">
      <h1>Blogs</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && 
      <ul>
        {data.BlogsList.map((blog, index) =>
        <li key={index}>
          <h2>{blog.title}</h2>
        </li>)}
      </ul>

      }
    </div>
  );
};

export default BlogsList;
