import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import sanghrila from '../img/home/sanghrila.png';
import icms from '../img/home/icms.png'
import raya from '../img/home/raya.png'

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
const Portfolio = () => {
  return (
    <motion.section initial={{opacity:0, y:'100%'}} animate={{opacity:1, y:0}} exit={{opacity:0, y:'100%'}} transition={transition1} className='section'>
      <div className='container px-[30px] lg:px-[100px] mx-auto h-full '>
        <div className='flex flex-col justify-center items-center pt-36 pb-14  md:pb-0  md:mb-0 md:pt-16 h-full'>
          <h2 className='mb-10 text-center'>My Projects</h2>
          <p className='mb-12 text-center lg:w-3/5'>Here, you can explore some of the recent frontend projects I've completed for various clients. </p>
          <div className='grid lg:grid-cols-3 gap-4 h-full w-full'>
            <div className='flex flex-col justify-center items-center w-full h-[310px] relative'>
              <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.9)] rounded-[20px]  opacity-0 hover:opacity-90 z-20 transistion-all duration-300 flex justify-center items-center flex-col p-5'>
              <p className='text-center text-white mb-3'>Sanghrila Eco Trek is a travel and trekking company base in Switzerland.</p>
                <Link to='https://shangrilaecotrek.com/'>
                  
                <BsArrowUpRightCircleFill className='text-5xl text-white hover:opacity-70 transistion-all duration-300'/>
                </Link>
              </div>
              <div className='p-2  rounded-[20px] border border-secondary text-center w-full h-full '>               
                <img src={sanghrila} className='rounded-[14px] h-full object-cover w-full'/>
              </div>
            </div>
            
            <div className='flex flex-col justify-center items-center w-full h-[310px] relative'>
              <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.9)] rounded-[20px]  opacity-0 hover:opacity-90 z-20 transistion-all duration-300 flex justify-center items-center flex-col p-5'>
              <p className='text-center text-white mb-3'>The Institute of Crisis Management Studies is a well-known center for academia focusing on the management of crisis</p>
                <Link to='https://www.tuicms.edu.np/'>
                  
                <BsArrowUpRightCircleFill className='text-5xl text-white hover:opacity-70 transistion-all duration-300'/>
                </Link>
              </div>
              <div className='p-2  rounded-[20px] border border-secondary text-center w-full h-full '>               
                <img src={icms} className='rounded-[14px] h-full object-cover w-full'/>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-[310px] relative'>
              <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.9)] rounded-[20px]  opacity-0 hover:opacity-90 z-20 transistion-all duration-300 flex justify-center items-center flex-col p-5'>
              <p className='text-center text-white mb-3'>Raya Tours, an authorized government licensed tour and travel agency, is specialized in providing tour and travel service</p>
                <Link to='https://www.rayatours.com/'>
                  
                <BsArrowUpRightCircleFill className='text-5xl text-white hover:opacity-70 transistion-all duration-300'/>
                </Link>
              </div>
              <div className='p-2  rounded-[20px] border border-secondary text-center w-full h-full '>               
                <img src={raya} className='rounded-[14px] h-full object-cover w-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Portfolio;
