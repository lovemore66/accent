import React from 'react';
import './Blog.css';

const Blog = ({ backgroundImage, children }) => {
  const contentStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="container">
      <div className='content' style={contentStyle}>
        <section className="content-section">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Blog;
