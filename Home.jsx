import React, { useState } from "react";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    const id = blogs.length + 1;
    setBlogs([...blogs, { id, ...newBlog }]);
  };

  return (
    <div className="home">
      <BlogForm onAddBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;

