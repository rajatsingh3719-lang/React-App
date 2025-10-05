import React from "react";

const BlogCard = ({ title, content }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{content.slice(0, 150)}...</p>
    </div>
  );
};

export default BlogCard;
