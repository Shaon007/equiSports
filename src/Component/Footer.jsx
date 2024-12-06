import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div>
      <footer className="max-w-[1600px] mx-auto flex justify-center px-4 text-gray-800 bg-[#1F2937]">
        <div className="container px-6 py-6">
          <div className="flex justify-center">EquiSports</div>
          <h1 className="text-sm text-white font-bold text-center lg:text-lg">
            Join 31,000+ others and never miss <br /> out on new tips, tutorials, and more.
          </h1>

          <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Email Address"
            />
            <button
              onClick={handleSubscribe}
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Subscribe
            </button>
          </div>

          <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="flex mt-4 md:m-0">
              <div className="flex justify-center items-center">
                <Link to="/" className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline">
                  Home
                </Link>
                <Link to="/about" className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline">
                  About
                </Link>
                <Link to="/myProfile" className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline">
                  Profile
                </Link>
                <Link to="/faq" className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline">
                  FAQ
                </Link>
                <Link to="/contact" className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="mt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} EquiSports. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
