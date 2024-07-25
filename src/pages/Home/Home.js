import './Home.scss';
import React from 'react';
import Banner from '../../components/Banner/Banner.js';
import HotelDisplay from '../../components/HotelDisplay/HotelDisplay.js';
import Footer from '../../components/Footer/Footer.js';
import image from "../../images/Home.jpg"

function Home() {
  return (
    <div className="app">
      <Banner image={image} texte="Chez vous, partout et ailleurs" overlay={true} />
      <div className='cards-container'>
        <HotelDisplay />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
