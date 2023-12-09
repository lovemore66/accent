import React from 'react';
import './Logos.css';

const Logos = ({ logoData }) => {
  return (
    <div className="logos">
      {logoData.map((logo) => (
        <div key={logo.id}>
          <img src={logo.url} alt={logo.name} />
        </div>
      ))}
    </div>
  );
};

export default Logos;

