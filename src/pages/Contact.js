import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp, IoShareSocial } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaGithubAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
const Contact = () => {
  return (
    <motion.section  initial={{opacity:0, y:'100%'}} animate={{opacity:1, y:0}} exit={{opacity:0, y:'100%'}} transition={transition1} className='section'>
      <div className='container px-[30px] lg:px-[100px] mx-auto md:h-[90vh]'>
        <div className='flex flex-col justify-center items-center pt-36 pb-14 md:pt-0 md:pb-0 mb-12 md:mb-0 md:pt-16 h-full'>
          <h2 className='mb-6'>Contact Me</h2>
          <p className='mb-12 text-center lg:w-3/5'>Feel free to contact me for any inquiries or opportunities for improvement. I'm always open to collaborating and making positive changes.</p>
          <div className='mb-12 p-0 w-full gap-x-4 gap-y-4 md:gap-y-0 flex flex-col md:flex-row'>
            <div className='px-4 py-6 md:w-1/2 rounded-[20px] border border-secondary text-center '>
            <IoMdMail className='text-5xl mx-auto mb-4'/>
              <h3>E-mail</h3>
              <a href="mailto:nazushakya7@gmail.com" className='font-medium'>nazushakya7@gmail.com</a>
            </div>
            <div className='px-4 py-6 md:w-1/2 rounded-[20px] border border-secondary text-center'>
            <IoLocationSharp className='text-5xl mx-auto mb-4'/>
              <h3>Location</h3>
              <p>Kalanki, Kathmandu
              </p>
            </div>
            <div className='px-4 py-6 md:w-1/2 rounded-[20px] border border-secondary text-center'>
              <IoShareSocial className='text-5xl mx-auto mb-4'/>
              <h3>Socials</h3>
              <div className='flex gap-x-3 mt-3 justify-center text-primary'>
                <Link to='https://www.facebook.com/nazma.shakya.7/'><FaFacebook className='text-2xl  text-primary'/></Link>
                <Link to='https://www.instagram.com/nazmashakya/'> <FaInstagram className='text-2xl  text-primary'/> </Link>
                <Link to='https://github.com/NazmaShakya7'> <FaGithubAlt className='text-2xl  text-primary'/> </Link>
                <Link to='https://wa.me/9860320444'><IoLogoWhatsapp className='text-2xl  text-primary'/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[10vh] border border-stone-500 flex justify-center items-center'>
        <p className='text-center text-[15px] font-semibold'>Copyright © 2024. All rights are reserved</p>
      </div>
    </motion.section>
  )
};

export default Contact;
