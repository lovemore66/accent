import React from 'react';
import './Banner.css';

const Banner = ({ title, text, children, bannerImage}) => {
    return (
        <div className="banner">
            <div className='banner-content'>
                <img src={bannerImage} />
                <section className="banner-section">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <div className='btn'>{children}</div>
                </section>
            </div>
        </div>
    );
};

export default Banner;
