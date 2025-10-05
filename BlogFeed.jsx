import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function BlogFeed({ newPost }) {
  const [blogs, setBlogs] = useState([]);

  // Simulate fetching data on mount
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  // Add new blog dynamically
  useEffect(() => {
    if (newPost) {
      setBlogs((prevBlogs) => {
        const updated = [...prevBlogs, newPost];
        localStorage.setItem("blogs", JSON.stringify(updated));
        return updated;
      });
    }
  }, [newPost]);

  return (
    <div className="blog-feed">
      <h2>Latest Posts</h2>
      {blogs.length === 0 ? (
        <p>No posts yet — start writing!</p>
      ) : (
        blogs.map((b, i) => (
          <BlogCard key={i} title={b.title} content={b.content} />
        ))
      )}
    </div>
  );
}

export default BlogFeed;
