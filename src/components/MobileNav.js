import React, { useState } from 'react';
import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuVariants={
  hidden:{
    opacity:0,
    x:'100%'
  },
  show:{
    opacity:1,
    x:0,
    transition:{
      ease: [0.6,0.01,-0.05,0.9]
    }
  }
}
const MobileNav = () => {
  const [openMenu, setOpenMenu]=useState(false);
  return(
      <nav className=''>
        <div className='text-4xl cursor-pointer '>
          <CgMenuRight onClick={()=>setOpenMenu(true)} />
        </div>
        <motion.div variants={menuVariants} initial='hidden' animate={openMenu ? 'show' :''} className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-30'>
            <div className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
              <IoMdClose onClick={()=>setOpenMenu(false)}/>
            </div>
            <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-semibold text-3xl'>
              <li>
                <Link to='/'  onClick={()=>setOpenMenu(false)}>Home</Link>
              </li>
              <li>
                <Link to='/about'  onClick={()=>setOpenMenu(false)}>About</Link>
              </li>
              <li>
                <Link to='/portfolio'  onClick={()=>setOpenMenu(false)}>Portfolio</Link>
              </li>
              <li>
                <Link to='/contact'  onClick={()=>setOpenMenu(false)}>Contact</Link>
              </li>
            </ul>
        </motion.div>
        
      </nav>
    
    ) 
};

export default MobileNav;
