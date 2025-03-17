// You need to fetch data from an API in a React component while handling errors gracefully. The API call should be made when the component mounts, and error handling should be implemented using try-catch blocks and React’s useEffect and useState hooks.
//

import React, { useEffect, useState } from "react";
import "../Styles/FetchApi.css";

const FetchApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // tracks loading state
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setErrors(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="fetch-container">
      <h2>Fetch API</h2>
      {data && (
        <div className="data-box">
          {loading && <p>Loading...</p>}
          {errors && <p>Error: {errors}</p>}
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default FetchApi;
