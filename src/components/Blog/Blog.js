import React from 'react';
import './Blog.css'

const Blog = ({ paragraph }) => {
  return (
    <div className="blog">
      <p>{paragraph}</p>
    </div>
  );
};

export default Blog;
