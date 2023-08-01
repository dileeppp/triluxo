"use client"
import React, { useState } from 'react';
import styles from '../app/page.module.css'

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    setComments([...comments, newComment]);
    e.target.reset();
  };

  return (
    <div className={styles.comment}>
      
      <form onSubmit={handleAddComment} className={styles.comment_f}>
        <input
        className={styles.comment_i}
          type="text"
          name="comment"
          placeholder="Add a comment..."
          required
        />
        <button type="submit">

          <img  className={styles.commentBtn} src='/send.png' alt='image' width="40px" height="25px" />
        </button>
      </form>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li className={styles.comment_li} key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
