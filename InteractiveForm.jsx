import React, { useState, useEffect, useRef } from "react";

function InteractiveForm({ onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const contentRef = useRef(null);

  // Focus on the content box automatically on mount
  useEffect(() => {
    contentRef.current.focus();
  }, []);

  // Auto-save simulation every time content changes
  useEffect(() => {
    if (content) {
      setStatus("Auto-saving...");
      const timer = setTimeout(() => {
        setStatus("All changes saved!");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddBlog({ title, content });
      setTitle("");
      setContent("");
      setStatus("Post published successfully!");
    }
  };

  return (
    <form className="interactive-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        ref={contentRef}
        placeholder="Start writing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <p className="status">{status}</p>
      <button type="submit">Publish</button>
    </form>
  );
}

export default InteractiveForm;
