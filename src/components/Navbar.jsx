import React from 'react';
import '../style/navbar.css';
import { BsApple } from 'react-icons/bs';
import { CgSearch } from 'react-icons/cg';
import { IoBagOutline } from 'react-icons/io5';
import { Cross as Hamburger } from 'hamburger-react';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar active'>
        <ul>
          <div className='mobile-nav'>
            <li className='mobile__hamburger'>
              <Hamburger size={16} />
            </li>
            <li className='mobile__logo'>
              <BsApple size={18} />
            </li>
            <li className='mobile__bag'>
              <IoBagOutline size={20} />
            </li>
          </div>

          <li>
            <a className='apple__logo' href='#'>
              <BsApple className='navbar__icons apple' />
            </a>
          </li>
          <li className='nav__link'>
            <a href='#'>Store</a>
          </li>
          <li className='nav__link'>
            <a href='#'>Mac</a>
          </li>
          <li className='nav__link'>
            <a href='#'>iPad</a>
          </li>
          <li className='nav__link'>
            <a href='#'>iPhone</a>
          </li>
          <li className='nav__link'>
            <a href='#'>Watch</a>
          </li>
          <li className='nav__link'>
            <a href='#'>AirPods</a>
          </li>
          <li className='nav__link'>
            <a href='#'>TV & Home</a>
          </li>
          <li className='nav__link'>
            <a href='#'>Only on Apple</a>
          </li>
          <li className='nav__link'>
            <a href='#'>Accessories</a>
          </li>
          <li className='nav__link'>
            <a href='#'>Support</a>
          </li>
          <li>
            <CgSearch className='navbar__icons search' />
          </li>
          <li>
            <IoBagOutline className='navbar__icons bag' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
