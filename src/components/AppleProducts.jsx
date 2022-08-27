import React from 'react';
import '../style/apple-products.css';
import AirChip from '../assets/AirChip.png';
import ProChip from '../assets/ProChip.png';
import MacbookAir from '../assets/macbook-air.png';
import AppleWatch from '../assets/apple_watch.png';
import Ipad from '../assets/ipad.png';
import IpadText from '../assets/iPad__air__text.png';
import AppleCard from '../assets/card.png';
import ArcadeGame from '../assets/games.png';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { BsApple } from 'react-icons/bs';
import { ImArrowUpRight2 } from 'react-icons/im';

const AppleProducts = () => {
  return (
    <>
      <section className='section__apple__products'>
        <div className='apple__products'>
          <div className='macbook__air'>
            <p className='title__macbook-air'>MacBook Air</p>
            <p className='sub-title__macbook-air'>
              Supercharged by
              <img className='macbook__chip' src={AirChip} alt='MacbookAirM2' />
            </p>
            <div className='sub__link__macbook'>
              <a className='sub-link__macbook-air' href='#'>
                Learn more
              </a>
              <HiOutlineChevronRight className='arrow-right' />
              <a
                className='sub-link__macbook-air'
                href='#'
                style={{ paddingLeft: '2rem' }}
              >
                Buy
              </a>
              <HiOutlineChevronRight className='arrow-right' />
            </div>
            <div className='apple__products__img'>
              <img src={MacbookAir} alt='MacbookAirM2' />
            </div>
          </div>
          <div className='macbook__pro'>
            <p className='title__macbook-pro'>MacBook Pro 13"</p>
            <p className='sub-title__macbook-pro'>
              Supercharged by
              <img className='macbook__chip' src={ProChip} alt='MacbookProM2' />
            </p>
            <div className='sub__link__macbook'>
              <a className='sub-link__macbook-pro' href='#'>
                Learn more
              </a>
              <HiOutlineChevronRight className='arrow-right blue' />
              <a
                className='sub-link__macbook-pro'
                href='#'
                style={{ paddingLeft: '2rem' }}
              >
                Buy
              </a>
              <HiOutlineChevronRight className='arrow-right blue' />
            </div>
            <div className='apple__products__img'>
              <img
                src='https://static.techspot.com/images2/news/bigimage/2022/06/2022-06-06-image-17.jpg'
                alt='MacbookProM2'
                width='500'
                height='360'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='section__apple__products'>
        <div className='apple__products'>
          <div className='apple__watch'>
            <h2 className='title__watch'>
              <BsApple />
              WATCH
            </h2>
            <h3 className='mini-title__watch'>SERIES 7</h3>
            <p className='sub-title__watch'>It's our largest display yet.</p>
            <div className='sub__link__watch'>
              <a className='sub-link__watch' href='#'>
                Learn more
              </a>
              <HiOutlineChevronRight className='arrow-right' />

              <a
                className='sub-link__watch'
                href='#'
                style={{ paddingLeft: '2rem' }}
              >
                Buy
              </a>
              <HiOutlineChevronRight className='arrow-right' />
            </div>
            <div className='apple__watch__img'>
              <img src={AppleWatch} alt='Apple Watch' />
            </div>
          </div>
          <div className='ipad'>
            <h1 className='title__ipad'>
              iPad
              <img className='air__text' src={IpadText} alt='air' />
            </h1>
            <p className='sub-title__ipad'>Light. Bright. Full of might.</p>
            <div className='sub__link__ipad'>
              <a className='sub-link__ipad' href='#'>
                Learn more
              </a>
              <HiOutlineChevronRight className='arrow-right blue' />

              <a
                className='sub-link__ipad'
                href='#'
                style={{ paddingLeft: '2rem' }}
              >
                Buy
              </a>
              <HiOutlineChevronRight className='arrow-right blue' />
            </div>
            <div className='apple__products__img'>
              <img src={Ipad} alt='Ipad' />
            </div>
          </div>
        </div>
      </section>
      <section className='section__apple__products'>
        <div className='apple__products'>
          <div className='apple__arcade'>
            <p className='title__arcade'>
              <BsApple style={{ height: '32px', width: '32px' }} />
              Card
            </p>
            <p className='sub-title__arcade'>Get up to 3% Daily Cash back</p>
            <p className='sub-title__arcade'>with every purchase.</p>
            <div className='sub__link__arcade'>
              <a className='sub-link__arcade' href='#'>
                Learn more
              </a>
              <HiOutlineChevronRight className='arrow-right' />
              <a
                className='sub-link__arcade'
                href='#'
                style={{ paddingLeft: '2rem' }}
              >
                Apply now
              </a>
              <HiOutlineChevronRight className='arrow-right' />
            </div>
            <div className='apple__arcade__card'>
              <img src={AppleCard} alt='Apple Card' />
            </div>
          </div>
          <div className='apple__arcade'>
            <p className='title__arcade'>
              <BsApple style={{ height: '32px', width: '32px' }} />
              Arcade
            </p>
            <p className='sub-title__arcade'>Jetpack Joyride 2</p>
            <p className='sub-title__arcade'>
              Fly by the sequel of your pants.
            </p>
            <div className='sub__link__arcade'>
              <a className='sub-link__arcade' href='#'>
                Learn more
              </a>
              <HiOutlineChevronRight className='arrow-right' />
              <a
                className='sub-link__arcade'
                href='#'
                style={{ paddingLeft: '2rem' }}
              >
                Try it free
                <sup style={{ fontSize: '10px', margin: '-5px 0 0 1.8px' }}>
                  2
                </sup>
              </a>
              <ImArrowUpRight2 className='arrow-right' />
            </div>
            <div className='apple__arcade__card'>
              <img src={ArcadeGame} alt='Apple Arcade' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppleProducts;
