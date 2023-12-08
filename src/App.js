import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Logos from './components/Logos/Logos';
import logoData from './assets/data/logoData';
import Footer from './components/Footer/Footer';
import { fetchData } from './utils/api';
import Card from './components/Card/Card';
import Blog from './components/Blog/Blog';
import uxIcon from './assets/icons/ux.svg'
import webIcon from './assets/icons/web.svg';
import appIcon from './assets/icons/app.svg';
import blockchainIcon from './assets/icons/blockchain.svg';
import './App.css';
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data on component mount
    const fetchDataFromAPI = async () => {
      const result = await fetchData();
      if (result) {
        setData(result);
      }
    };

    fetchDataFromAPI();
  }, []);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <Header />
      <Banner text="Welcome to the website!" buttonText="Click Me" onClick={handleClick} />
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
      <div className='case-studies'>
        <Blog />
        <Blog />
        <Blog />
      </div>
      <Logos logoData={logoData} />
      <Footer />
    </div>
  );
};

export default App;
