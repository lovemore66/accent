import React, { useState } from 'react';
import './Carousel.css';
import Blog from '../Blog/Blog';
import Spacebar from '../Spacebar/Spacebar';
import rightArrowIcon from '../../assets/icons/right-arrow.png';
import leftArrowIcon from '../../assets/icons/left-arrow.png';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className='blog'>
                            <Blog
                                heading="The Olympian"
                                backgroundImage={item.imageUrl
                                }
                            ><Spacebar title={item.title} subtitle={item.description} color="#fff" spaceClass="secondary" /></Blog>
                        </div>
                    </div>
                ))}
            </div>
            <div className="nav-btns">
                <button onClick={handlePrevClick}><img src={leftArrowIcon}/></button>
                <button onClick={handleNextClick}><img src={rightArrowIcon}/></button>
            </div>
        </div>

    );
};

export default Carousel;
