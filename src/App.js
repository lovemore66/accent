import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Logos from './components/Logos/Logos';
import logoData from './assets/data/logoData';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import { fetchData } from './utils/api';
import Card from './components/Card/Card';
import Blog from './components/Blog/Blog';
import Spacebar from './components/Spacebar/Spacebar';
import uxIcon from './assets/icons/ux.svg';
import webIcon from './assets/icons/web.svg';
import appIcon from './assets/icons/app.svg';
import blockchainIcon from './assets/icons/blockchain.svg';
import dragon from './assets/images/dragon.jpeg';
import olympian from './assets/images/olympian.jpeg';
import skhokho from './assets/images/skhokho.jpeg';
import confidence from './assets/images/confidence.jpeg';
import './App.css';
import Carousel from './components/Carousel/Carousel';
const App = () => {
  const [data, setData] = useState([]);
  const items = [
    { title: 'Item 67892397', image: olympian },
    { title: 'Item 67892397', image: './assets/images/dragon.jpeg' },
    { title: 'Item 67892397', image: './assets/images/dragon.jpeg' },
    { title: 'Item 67892397', image: './assets/images/dragon.jpeg' },
  ];

  useEffect(() => {
    let isMounted = true;

    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData();
        if (isMounted && result) {
          setData(result);
          console.log('Data in State:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();

    return () => {
      isMounted = false;
    };
  }, []);

  const NavigateToProjocts = () => {
    alert('No projects exist!');
  };

  return (
    <div className="App">
      <Header />
      <Banner title="Live with Confidence" text="José Mourinho brings confidence to pan-African Sanlam campaign." bannerImage={confidence}>
        <Button btnClassName="primary" text="View project" onClick={NavigateToProjocts} />
      </Banner>
      <div>
        <div className='heading first-heading'>
          <Spacebar title='What we do' spaceClass="primary" />
          <h1>
            We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
          </h1>
        </div>
      </div>
      <div className='cards'>
        <Card
          smallImage={webIcon}
          header="Web development"
          paragraph="We use cutting-edge web development technologies to help our clients 
          fulfill their business goals through functional, reliable solutions."
        />
        <Card
          smallImage={uxIcon}
          header="User experience & design"
          paragraph="Our complete web design services will bring your ideas to life and provide you with a sleek,
           high-performing product that elevates your business."
        />
        <Card
          smallImage={appIcon}
          header="Mobile app development"
          paragraph="Our extensive mobile development experience allows us to create 
          custom native and cross-platform iOS and Android mobile solutions for our clients."
        />
        <Card
          smallImage={blockchainIcon}
          header="Blockchain solutions"
          paragraph="We conduct market research to determine the optimal blockchain-based solutions 
          to help you grow your company and achieve your business goals."
        />
      </div>
      <div className='heading second-heading'>
        <Spacebar title='Case studies' spaceClass="primary" />
      </div>
      <div className='case-studies'>
      <Carousel items={data} />
      </div>
      <div className='brands-heading'>
        <Spacebar title='You’ll be in good company' spaceClass="primary" />
        <h1>
          Trusted by leading brands
        </h1>
      </div>
      <Logos logoData={logoData} />
      <Footer />
    </div>
  );
};

export default App;
