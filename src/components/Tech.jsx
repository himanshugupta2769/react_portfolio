import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di"
import { SiExpress } from "react-icons/si";
;

import { animate, motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity, // Corrected the spelling
      repeatType: "reverse", // Corrected the spelling
    },
  },
});
const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVar(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVar(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-7xl text-blue-900" />
        </motion.div>
        <motion.div
          variants={iconVar(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVar(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-7xl text-red-800" />
        </motion.div>
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMongodb className="text-7xl text-green-800" />
        </motion.div>
        <motion.div
          variants={iconVar(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-yellow-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
