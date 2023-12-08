import React from 'react';
import './Banner.css';
import confidence from '../../assets/images/confidence.jpeg';

const Banner = ({ text, buttonText, onClick }) => {
    return (
        <div className="banner">
            <img src={confidence} alt="Confidence" />
            {/* <div className='content'>
                <p>{text}</p>
                <button onClick={onClick}>{buttonText}</button>
            </div> */}
        </div>
    );
};

export default Banner;
