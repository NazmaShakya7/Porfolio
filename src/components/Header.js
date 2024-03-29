import React from 'react';
// import Socials from './Socials';
import MobileNav from './MobileNav'

import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header className=' w-full px-[30px] lg:px-[100px] z-40 h-[80px] lg:h-[100px] flex items-center fixed bg-white md:bg-transparent'>
    <div className='flex  lg:flex-row items-center w-full justify-between '>
        <Link to={'/'}>
            <p className='logo'>Nazma Shakya</p>
        </Link>
        {/* <nav className='hidden  gap-x-10 font-semibold'>
          <Link to={'/'} className='text-secondary hover:text-primary transition'>
            Home
          </Link>
          <Link to={'/about'} className='text-secondary hover:text-primary transition'>
            About
          </Link>
          <Link to={'/portfolio'} className='text-secondary hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-secondary hover:text-primary transition'>
            Contact
          </Link>
        </nav> */}
        <MobileNav/>
    </div>
  </header>
  )
};

export default Header;
