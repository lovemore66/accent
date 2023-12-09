import React from 'react';
import './Button.css';

const Button = ({ text, onClick, disabled, btnClassName }) => {
  return (
    <div className='btn'>
      <div className={`button-container ${btnClassName}`}>
        <button onClick={onClick} disabled={disabled}>{text}</button>
      </div>
    </div>
  );
};

export default Button;

