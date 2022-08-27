import React from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import '../style/header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className='unicef'>
        <img className='logo-img' src={logo} alt='unicef' />
        <a>
          Donate to support families affected by the war in Ukraine
          <TbArrowUpRight className='arrow__up__right' />
        </a>
      </div>
    </header>
  );
};

export default Header;
