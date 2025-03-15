import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-blue-500">
            &copy; {new Date().getFullYear()} Tyrone Ty. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/tyrone.kariuki.16" className="text-blue-500 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://x.com/KariukiTyrone" className="text-blue-500 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/tyronety100/" className="text-blue-500 hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/tyrone-kariuki-90637a249/" className="text-blue-500 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ironious4" className="text-blue-500 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;