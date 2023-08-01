"use client";
import React, { useState } from "react";
import "./Create.css";
import { useRouter } from "next/navigation";

const Create = ({ blogs, setBlogs, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, content, file };
    setBlogs([...blogs, newBlog]);
    router.push("./blog");
    console.log("New Blog Post:", { title, content });
    setTitle("");
    setContent("");
    setFile(null);
    onClose();
    setBlogs([...blogs, { title, content, file }]);
  };

  return (
    <div className="create modal-overlay">
      <div className="create__1 modal-content">
        <h1>Create a New Blog</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <br />
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="file">Image/Video</label>
            <input
              type="file"
              id="file"
              accept="image/*,video/*"
              onChange={(e) => {
                console.log(e.target.files);
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <button type="submit" className="create__b">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
