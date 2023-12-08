import React from 'react';
import './Banner.css';

const Banner = ({ title, text, buttonText, onClick, backgroundImage }) => {
    const bannerContenStyle = {
        backgroundImage: `url(${backgroundImage})`,
      };

    return (
        <div className="banner">
            <div className='banner-content' style={bannerContenStyle}>
            <section className="banner-section">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <button onClick={onClick}>{buttonText}</button>
                </section>
            </div>
        </div>
    );
};

export default Banner;
