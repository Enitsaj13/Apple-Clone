import React from 'react';
import '../style/hero.css';
import { FcNext } from 'react-icons/fc';
import Iphone13 from '../assets/Apple13.png';
import Iphone13Pro from '../assets/Apple13.2.png';
import Macbook from '../assets/Macbook.png';

const Hero = () => {
  return (
    <>
      <section className='section__hero__div'>
        <br />
        <div className='iphone__section'>
          <p className='title__hero'>iPhone 13</p>
          <p className='sub-title__hero'>Your new superpower.</p>
          <div className='sub-link__hero'>
            <a href='#'>Learn more</a>
            <FcNext className='icon__hero' />
            <a href='#'>Buy</a>
            <FcNext className='icon__hero' />
          </div>
          <img className='hero__image' src={Iphone13} alt='Iphone13' />
        </div>
      </section>
      <br />
      <section className='section__hero__div'>
        <br />
        <div className='iphone__section'>
          <p className='title__hero'>iPhone 13 Pro</p>
          <p className='sub-title__hero'>Oh. So. Pro.</p>
          <div className='sub-link__hero'>
            <a href='#'>Learn more</a>
            <FcNext className='icon__hero' />
            <a href='#'>Buy</a>
            <FcNext className='icon__hero' />
          </div>
          <img className='hero__image' src={Iphone13Pro} alt='Iphone13' />
        </div>
      </section>
      <br />
      <section className='section__hero__div macbook'>
        <br />
        <div className='iphone__section'>
          <p className='title__hero'>
            <i>
              Get <span className='hero__title__pink'>supercharged</span> for
              college.
            </i>
          </p>
          <p className='sub-title__hero'>
            Save on Mac or iPad. Plus get a card up to $150.
            <sup style={{ fontSize: '15px' }}>1</sup>
          </p>
          <div className='sub-link__hero'>
            <a href='#'>Learn more</a>
            <FcNext className='icon__hero' />
            <a href='#'>Buy</a>
            <FcNext className='icon__hero' />
          </div>
          <img className='hero__image' src={Macbook} alt='Iphone13' />
        </div>
      </section>
    </>
  );
};

export default Hero;
