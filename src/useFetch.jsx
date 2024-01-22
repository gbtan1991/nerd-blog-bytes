import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [blogsData, setBlogsData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setBlogsData(data); // Update blogData with the new data
        
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  

  return {
    blogsData, isPending, error
  };
};

export default useFetch;
