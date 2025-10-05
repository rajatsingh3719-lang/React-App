import React, { Component } from "react";
import BlogCard from "./BlogCard";

class BlogList extends Component {
  render() {
    const { blogs } = this.props;
    return (
      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog.id} title={blog.title} content={blog.content} />
          ))
        ) : (
          <p>No blogs yet. Write something!</p>
        )}
      </div>
    );
  }
}

export default BlogList;
