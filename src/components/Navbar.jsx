import React from 'react';
import '../style/navbar.css';
import { BsApple } from 'react-icons/bs';
import { CgSearch } from 'react-icons/cg';
import { IoBagOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar active'>
        <ul>
          <li>
            <HiOutlineMenuAlt4 className='navbar__icons menu-hidden' />
          </li>

          <li>
            <a className='apple__logo' href='#'>
              <BsApple className='navbar__icons apple' />
            </a>
          </li>
          <li className='nav__link'>Store</li>
          <li className='nav__link'>Mac</li>
          <li className='nav__link'>iPad</li>
          <li className='nav__link'>iPhone</li>
          <li className='nav__link'>Watch</li>
          <li className='nav__link'>AirPods</li>
          <li className='nav__link'>TV & Home</li>
          <li className='nav__link'>Only on Apple</li>
          <li className='nav__link'>Accessories</li>
          <li className='nav__link'>Support</li>
          <li>
            <CgSearch className='navbar__icons search' />
          </li>
          <li>
            <IoBagOutline className='navbar__icons bag' />
          </li>
          <li>
            <BsApple className='navbar__icons apple-hidden' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
