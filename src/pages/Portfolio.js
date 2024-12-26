import React from 'react';
import { Link } from 'react-router-dom';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { motion } from 'framer-motion';
import { IoOpenOutline } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
// Import images
import sanghrila from '../img/speakup.png';
import icms from '../img/heli.png';
import raya from '../img/bookstore.jpg';

// Define transition
const transition1 = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const ProjectCard = ({ image, title, description, link, stack, index }) => (
  <div className={`flex  flex-col  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-8 w-full md:h-[300px]`}>
    <div className='p-2 rounded-[10px] border border-gray-200 text-center md:w-1/2 '>
      <img src={image} alt={title} className='rounded-[8px] h-[200px] md:h-full object-cover w-full' />
    </div>
    <div className='flex flex-col justify-between w-full md:w-1/2 '>
      <div>
        <h3 className='mb-6 text-[23px]'>{title}</h3>
        <p className='text-[15px] mb-6'>{description}</p>
        <Link to={link} className='flex items-center text-[15px] underline hover:no-underline'> <span className='mr-3'>{title != 'Bookstore' ? <IoOpenOutline /> : <IoOpenOutline />}</span> {title !== 'Bookstore' ? 'View Live' : 'View Repository'}</Link>
      </div>
      <div className="flex flex-wrap mt-4">
            {stack.map((tech) => {
              const techItem = techStack.find((item) => item.name === tech);
              return (
                techItem && (
                  <div
                    key={techItem.name}
                    className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg mr-2 mb-2"
                  >
                    {techItem.icon}
                    <span>{techItem.name}</span>
                  </div>
                )
              );
            })}
      </div>
    </div>
  </div>
);
const techStack = [
  { name: "React", icon: <RiReactjsFill />},
  { name: "Tailwind", icon: <BiLogoTailwindCss />},
  { name: "Next", icon: <TbBrandNextjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "Postgres", icon: <BiLogoPostgresql />}
];
const Portfolio = () => {
  const projects = [
    {
      image: sanghrila,
      title: "Speakup Nepal",
      description: "An online petition platform for amplifying the voices of Nepalese citizens, featuring Authentication implementation, OG Images for social sharing, and a database powered by PostgreSQL. Built with Django as the backend framework and Next.js as the frontend.",
      link: "https://speakupnepal.org/",
      stack: ["Tailwind", "Next", "Django", "Postgres"],
    },
    {
      image: icms,
      title: "Heli Rescue",
      description: "A dedicated air rescue platform providing swift and reliable helicopter services, ensuring safety in every mission. Built with React.js, DaisyUI, and TailwindCSS for a modern and responsive user interface.",
      link: "https://helirescueservice.com/",
      stack:["React","Tailwind"]
    },
    {
      image: raya,
      title: "Bookstore",
      description: "An e-commerce bookstore platform offering features such as browsing and purchasing books, adding items to the cart, and other essential e-commerce functionalities. Includes user authentication. Built with Express.js for the backend, MongoDB for the database, and Mongoose for data modeling.",
      link: "https://github.com/LeezaShakya/bookstore.git",
      stack: ["Express", "MongoDB"]
    }
  ];

  return (
    <ScrollArea.Root className='overflow-hidden'>
      <ScrollArea.Viewport className="w-full h-screen pb-14">
        <motion.section initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={transition1}>
          <div className='container px-[30px] lg:px-[100px] mx-auto h-full'>
            <div className='flex flex-col justify-center items-center pt-36 pb-14 md:pb-0 md:mb-0 md:pt-16 h-full'>
              <h2 className='mb-10 text-center'>My Projects</h2>
              <p className='mb-12 text-center lg:w-3/5'>Here, you can explore some of the recent projects I've worked for.</p>
              <div className='space-y-10 md:space-y-16 w-full'>
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-gray-100 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-gray-200" />
    </ScrollArea.Root>
  );
};

export default Portfolio;

