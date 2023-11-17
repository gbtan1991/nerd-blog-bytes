import { useState, useEffect } from "react";

const useFetch = ( url ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
          .then((res) => {
            if(!res.ok){
              throw Error("Couldn't connect to the resources");
            }
            return res.json();
            
          })
          .then((data) => {
            setData(data);
            setLoading(false);
            setError(null);
            
          })
          .catch(error => {
            console.log("Error fetching data:", error);
            setLoading(false);
            setError(error.message)
          }, 100000);
      }, []);

  return { data, loading, error, setData }
}

export default useFetch






