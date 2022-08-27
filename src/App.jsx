import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import AppleProducts from './components/AppleProducts';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />;
      <Header />;
      <Hero />
      <AppleProducts />
      <Carousel />
      <Footer />
    </>
  );
};

export default App;
