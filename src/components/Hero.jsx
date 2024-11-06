import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
 import resumePDF from "../assets/resume.pdf"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:justify-between items-center">
        
        <div className="w-full lg:w-1/2 lg:text-left text-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="pb-1 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16">
              Himanshu Gupta
            </h1>
            <span className="bg-gradient-to-r from-purple-700 via-slate-500 to-yellow-300 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-4 max-w-xl py-4 font-light tracking-tighter text-base lg:text-lg">
              {HERO_CONTENT}
            </p>
          
            <a
              href={resumePDF} 
              download="Himanshu_Gupta_Resume_fullstack.pdf" 
              className="mt-4 mb-5 inline-block rounded bg-purple-600 px-6 py-3 text-white transition-all duration-300 hover:bg-purple-700"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

      
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <img src={profilePic} alt="profile pic" className="rounded-lg" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
