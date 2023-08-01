"use client";
import React, { useEffect, useState } from "react";
import Create from "../../../components/create/Create";
import CommentSection from "../../../components/CommentSection";
import "./BLog.css";
import { Joan } from "next/font/google";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="blog">
      {isModalOpen && (
        <Create blogs={blogs} setBlogs={setBlogs} onClose={handleCloseModal} />
      )}
      <button className="blog__create" onClick={() => setIsModalOpen(true)}>
        Add
      </button>
      <div className="blog-cards-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            {blog.file?.type && (
              <div className="blog-image-container">
                {blog.file.type.startsWith("image") ? (
                  <img
                    src={URL.createObjectURL(blog.file)}
                    alt="Blog"
                    className="blog-image"
                  />
                ) : (
                  <video controls className="blog-video">
                    <source
                      src={URL.createObjectURL(blog.file)}
                      type={blog.file.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                )}

            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
                <CommentSection />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
