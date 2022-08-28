import React from 'react';
import '../style/header.css';
import logo from '../assets/logo.png';
import { IoIosArrowRoundUp } from 'react-icons/io';

const Header = () => {
  return (
    <header>
      <div className='unicef'>
        <div className='logo__div'>
          <img className='logo-img' src={logo} alt='unicef' />
        </div>
        <div className='text__div'>
          <a>
            Donate to support families affected by the war in Ukraine
            <IoIosArrowRoundUp size={20} className='arrow__up__right' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
