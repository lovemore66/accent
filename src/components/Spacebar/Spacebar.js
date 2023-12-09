import React from 'react';
import line from '../../assets/icons/line.svg';
import './Spacebar.css';

const Spacebar = ({ title, spaceClass, subtitle, color }) => {
  const textStyle = { color: color || 'black' };

  return (
    <div className={spaceClass}>
      <section>
        <img src={line} alt="Line icon" />
        <h3 style={textStyle}>{title}</h3>
        <h5 style={textStyle}>{title}</h5>
        <p style={textStyle}>{subtitle}</p>
      </section>
    </div>
  );
};

export default Spacebar;
