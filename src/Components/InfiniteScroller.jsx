import React, { useEffect, useState } from "react";
import "../Styles/ImageScroller.css";

const InfiniteScroller = () => {
  const [items, setItems] = useState([]); //stores the fefcthed posts
  const [page, setPage] = useState(1); //keeps track of the current page
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );
    const data = await response.json();
    setItems((prevItems) => [...prevItems, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="parent-infinite-scroller-container">
      <h2>Infinite Image Scroller</h2>
      <div className="images-container">
        {items.map((img) => (
          <img
            src={img.download_url}
            key={img.id}
            width={300}
            height={200}
            alt="random images"
          />
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroller;
