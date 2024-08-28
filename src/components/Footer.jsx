import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

/* -------------------------------------------------------------------------- */
/*                              FOOTER COMPONENT                              */
/* -------------------------------------------------------------------------- */

const Footer = () => {
  return (
    <div className="h-fit p-6 flex flex-col bg-electric_blue text-white">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-top">
        <div className="w-full md:w-1/3 font-bold text-2xl text-center md:text-left mb-4 md:mb-0">
          Francina <br /> Dippiton
        </div>

        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <div className="h-fit flex items-center justify-center space-x-3 py-3 sm:py-3">
            <a
              className="hover:text-casablanca hover:scale-110 p-2 text-white border border-white hover:border-casablanca rounded-full"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/fdippiton"
            >
              <BsGithub className="w-7 h-7" />
            </a>
            <a
              className="hover:text-casablanca hover:scale-110 p-2 text-white border border-white hover:border-casablanca rounded-full"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/francina-dippiton/"
            >
              <BsLinkedin className="w-7 h-7" />
            </a>
            <a
              className="hover:text-casablanca hover:scale-110 p-2 text-white border border-white hover:border-casablanca rounded-full"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/fdippiton/"
            >
              <FiInstagram className="w-7 h-7" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <ul className="nav nav-pills   text-white grid justify-center md:justify-end  md:text-right">
            <li className="nav-item">
              <a className="nav-link cursor-pointer text-sm pt-4" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cursor-pointer text-sm" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cursor-pointer text-sm" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cursor-pointer text-sm" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cursor-pointer text-sm" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cursor-pointer text-sm" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-10  p-4 bg-electric_blue text-white text-xs justify-center flex">
        Francina Dippiton 2024, ® All rights reserved
      </div>
    </div>
  );
};

export default Footer;
