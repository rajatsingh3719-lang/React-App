import React, { Component } from "react";

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddBlog(this.state);
    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={this.state.title}
          onChange={this.handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Write your story..."
          value={this.state.content}
          onChange={this.handleChange}
          required
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    );
  }
}

export default BlogForm;
