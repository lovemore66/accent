import React, { useEffect, useState, useCallback } from 'react';
import './Carousel.css';
import Blog from '../Blog/Blog';
import Spacebar from '../Spacebar/Spacebar';
import rightArrowIcon from '../../assets/icons/right-arrow.png';
import leftArrowIcon from '../../assets/icons/left-arrow.png';
import { fetchData } from '../../utils/api';

const Carousel = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchDataFromAPI = useCallback(async () => {
        try {
            const result = await fetchData();
            if (result) {
                setData(result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    useEffect(() => {
        let isMounted = true;

        fetchDataFromAPI();

        return () => {
            isMounted = false;
        };
    }, [fetchDataFromAPI]);

    const handlePrevClick = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }, [data]);

    const handleNextClick = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, [data]);

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className='blog'>
                            <Blog
                                heading="The Olympian"
                                backgroundImage={item.imageUrl}
                            >
                                <Spacebar title={item.title} subtitle={item.description} color="#fff" spaceClass="secondary" />
                            </Blog>
                        </div>
                    </div>
                ))}
            </div>
            <div className="nav-btns">
                <button onClick={handlePrevClick}><img src={leftArrowIcon} alt='left arrow' /></button>
                <button onClick={handleNextClick}><img src={rightArrowIcon} alt='right arrow' /></button>
            </div>
        </div>
    );
};

export default Carousel;
