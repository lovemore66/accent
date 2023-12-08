import React from 'react';
import './Blog.css';

const Blog = ({ heading, paragraph, backgroundImage }) => {
  const contentStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="container">
      <div className='content' style={contentStyle}>
        <secttion className="content-section">
        <h4>{heading}</h4>
        <p>{paragraph}</p>
        </secttion>
      </div>
    </div>
  );
};

export default Blog;
