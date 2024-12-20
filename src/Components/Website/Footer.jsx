
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-black">
      {/* Main Footer Section */}
      <div
        className="text-center py-8 w-full max-w-screen-lg mx-auto"
        data-aos="fade-up"
      >
        {/* Logo and Tagline */}
        <div className="mb-6">
          <img src="/Images/logo.png" className="mx-auto" alt="Logo" />
          <h1 className="text-[20px] text-gray-400 mt-4">Where Fitness Meets Social</h1>
          <h1 className="text-[20px] text-gray-400">Connection!</h1>
        </div>

        {/* Contact Button and Navigation Links */}
        <div>
          <button
            className="mt-4 h-[50px] w-[300px] border text-white rounded-xl"
            style={{ backgroundColor: "#28282C" }}
          >
            hello@gym.birlaventures.com
          </button>
          <ul className="flex flex-wrap gap-4 justify-center mt-6 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>·</li>
            <li>
              <Link to="/dietplanform" className="hover:text-white transition">Diet Form</Link>
            </li>
            <li>·</li>
            <li>
              <Link to="/workoutplanform" className="hover:text-white transition">Workout Form</Link>
            </li>
            <li>·</li>
            <li>
              <Link to="/faqs" className="hover:text-white transition">FAQ'S</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Bottom Footer Section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 px-4 md:px-10 lg:px-20"
      >
        <div>
          <h1 className="text-lg text-gray-300 text-center sm:text-left">
            @2024 GymFluencer. All Rights Reserved.
          </h1>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center sm:justify-end items-center gap-6 mt-4 sm:mt-0">
          <AiOutlineLinkedin
            className="rounded-xl w-[40px] h-[40px] text-gray-300 hover:text-white transition"
            style={{ backgroundColor: "#121212" }}
          />
          <FaXTwitter
            className="rounded-xl w-[40px] h-[40px] text-gray-300 hover:text-white transition"
            style={{ backgroundColor: "#121212" }}
          />
          <FaInstagram
            className="rounded-xl w-[40px] h-[40px] text-gray-300 hover:text-white transition"
            style={{ backgroundColor: "#121212" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
