import React from 'react';
import './card.css';
const Card = ({ smallImage, header, paragraph }) => {
  return (
    <div className="card">
      <img src={smallImage} alt="Small" />
      <h4>{header}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
