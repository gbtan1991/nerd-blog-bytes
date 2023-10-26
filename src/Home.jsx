import { useState, useEffect } from "react"
import BlogsList from "./BlogsList"
import axios from "axios"

const Home = () => {
    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
      axios.get("http://localhost:3001/blogs")
        .then((response) => {
          setBlogs(response.data.reverse());
          setLoading(false);
          
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        })
    }, [])

    
  


  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <BlogsList blogs={blogs} />
      )}
    </div>
  )
}

export default Home
