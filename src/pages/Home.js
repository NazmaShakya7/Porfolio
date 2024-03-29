import React from 'react';
import female from '../img/home/female.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiUikit, SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
const Home = () => {
  return (
    <motion.section initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={transition1} className='section'>
      <div className='container px-[30px] lg:px-[100px] mx-auto h-full'>
        <div className='grid pb-10 md:pb-0 md:grid-cols-2 md:gap-4 h-full '>
          <div className='flex flex-col justify-center items-center pt-36 pb-10 lg:pt-20 lg:pb-0 mb-12 md:mb-0 text-center md:text-left md:items-start'>
            <h3 className='ml-2'>Hi! I'm Nazma Shakya</h3>
            <h1 className='mb-12'>Frontend Developer</h1>
            <div className='flex gap-x-2 md:gap-x-5 justify-center'>
              <h3 className='mb-12 mr-4'>Tech Stack |</h3>
              <FaHtml5 className='text-2xl' />
              <FaCss3Alt className='text-2xl' />
              <DiJavascript className='text-2xl' />
              <FaBootstrap className='text-2xl' />
              <SiTailwindcss className='text-2xl' />
              <FaReact className='text-2xl' />
              <SiUikit className='text-2xl'/>
            </div>
            <Link to={'/about'} className='btn'>About Me</Link>
          </div>
          <div>
            <img src={female} className='h-full object-cover'/>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Home;
