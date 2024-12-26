import React from 'react';
import female from '../img/home/female.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiUikit, SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
const Home = () => {
  return (
    <motion.section initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={transition1} className='section'>
      <div className='container px-[30px] lg:px-[100px] mx-auto h-full'>
        <div className='grid pb-10 md:pb-0 md:grid-cols-2 md:gap-4 h-full '>
          <div className='flex flex-col justify-center items-center pt-36 pb-10 lg:pt-20 lg:pb-0 mb-12 md:mb-0 text-center md:text-left md:items-start'>
            <h3 className='ml-2'>Hi! I'm Nazma Shakya</h3>
            <h1 className='mb-12'>Fullstack Developer</h1>
            <div className='flex flex-col gap-y-1 mb-12'>
              <h3 className='mb-2  text-[18px] '>| Tech Stack </h3>
              <div className='flex gap-x-2 md:gap-x-4'>  
                <FaHtml5 className='text-xl' />
                <FaCss3Alt className='text-xl' />
                <DiJavascript className='text-xl' />
                <FaBootstrap className='text-xl' />
                <SiTailwindcss className='text-xl' />
                <FaReact className='text-xl' />
                <TbBrandNextjs className='text-xl'/>
                <SiExpress className='text-xl'/>
                <SiDjango className='text-xl'/>
                <BiLogoMongodb className='text-xl'/>
                <BiLogoPostgresql className='text-xl'/>
              </div>
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
