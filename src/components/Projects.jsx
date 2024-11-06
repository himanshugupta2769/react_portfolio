import React from "react";
import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import the icon
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((items, index) => {
          return (
            <div
              key={index}
              className="relative mb-8 flex flex-wrap lg:justify-center"
            >
              {/* Clickable Image container wrapped in an anchor tag */}
              <a
                href={items.link} // Use the specific link for each project
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-1/4 group relative block"
              >
                <img
                  src={items.image}
                  alt={items.title}
                  width={200}
                  height={200}
                  className="mb-6 rounded transform transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm group-hover:border-white group-hover:border-4"
                />
                {/* Centered icon with hover effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExternalLinkAlt className="text-white text-3xl" />
                </div>
              </a>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{items.title}</h6>
                <p className="mb-4 text-neutral-400">{items.description}</p>
                {items.technologies.map((tech, index) => {
                  return (
                    <span
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                      key={index}
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
