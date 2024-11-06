import React, { useState } from "react";
// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx"; // Close icon

const NavBar = () => {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-18 flex items-center justify-between py-6 px-4">
      {/* Logo */}
      <div
        className="flex flex-shrink-0 item-center "
        style={{ marginLeft: "-13px" }}
      >
        <h2 className="mx-2 w-30	 text-3xl  tracking-tight font-medium">
          My Self
        </h2>
      </div>

      {/* Social Icons - Always visible on large screens */}
      <div className="hidden sm:flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/himanshu-gupta-a4a4ba227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/himanshugupta2769"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/sahilgupta2769?t=f_AfUf0gmZLy6H8k-XYupw&s=08 x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* Hamburger/Close Icon for phones (small screens) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-700"
        >
          {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (visible on phones when hamburger is clicked) */}
      {isOpen && (
        <div
          className="absolute top-0 right-0 w-[50%] h-screen flex flex-col items-center justify-center backdrop-blur-lg bg-black/60 text-white"
          style={{ zIndex: 50 }}
        >
          {/* Close Icon inside the menu, at the top right */}
          <button
            className="absolute top-4 right-4 text-3xl text-white"
            onClick={() => setIsOpen(false)}
          >
            <RxCross1 />
          </button>

          {/* Social Icons in the center */}
          <div className="flex flex-col items-center gap-8 mt-12">
            <a
              href="https://www.linkedin.com/in/himanshu-gupta-a4a4ba227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/himanshugupta2769"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/sahilgupta2769?t=f_AfUf0gmZLy6H8k-XYupw&s=08 x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-gray-300"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
