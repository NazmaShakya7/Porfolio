import React from 'react';
import profile from '../img/home/profilepic.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { Link } from 'react-router-dom';
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const About = () => {
  return( <motion.section initial={{opacity:0, y:'100%'}} animate={{opacity:1, y:0}} exit={{opacity:0, y:'100%'}} transition={transition1} className='section'>
    <div className='container px-[30px] lg:px-[100px] mx-auto h-full'>
      <div className='grid pb-10 md:pb-0 md:grid-cols-2 md:gap-20 h-full'>
        <div className='flex flex-col justify-center items-start pt-36 pb-10  md:pb-0 mb-12 md:mb-0 md:pt-16'>
          <h2 className='lg:mb-10'>About Me</h2>
          <p className='mb-6'>
          Hi, I'm Nazma Shakya, a Full Stack Developer with a passion for creating dynamic and user-friendly web applications. I specialize in designing and building stunning, intuitive front-end interfaces while seamlessly integrating them with back-end systems. 
          </p>
          <div className='mb-12 p-0 w-full gap-x-4 flex'>

            <div className='p-4 w-1/2 rounded-[20px] border border-secondary text-center '>
              <MdOutlineWorkOutline className='text-3xl mx-auto mb-3'/>
                <h3>Experience</h3>
                <p>2 Year experience in Fullstack Development</p>
            </div>
          <div className='p-4 w-1/2 rounded-[20px] border border-secondary text-center'>
          <FaBookReader className='text-3xl mx-auto mb-3'/>
                <h3>Education</h3>
                <p>B.Sc. CSIT
                  <br/>
                  (2019 - 2024)
                </p>
            </div>
          </div>
          <div className='flex gap-4'>  
            <Link to={'/portfolio'} className='btn'>My Works</Link>
            <button  onClick={() => window.open('/CV2024.pdf', '_blank')} className='btn'>My Resume</button>
          </div>
        </div>
        <div>
          <img src={profile} className='h-full w-full object-cover'/>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default About;
