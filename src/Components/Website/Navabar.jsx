

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <div className="h-[30px] w-full bg-transparent">
      <nav className="bg-black  mx-auto relative z-50">
        <div className="flex items-center justify-between px-4 py-3 md:py-4 md:px-6 max-w-[1200px] mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="/Images/logo.png"
              className="w-[142px] h-[36px]"
              alt="GymFluencer Logo"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <div className="relative">
                <button
                  className="hover:text-white"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Our Services ↓
                </button>
                {isServicesOpen && (
                  <div
                    className="absolute top-full left-0 bg-black border rounded-md text-gray-400 w-40 mt-2 shadow-lg"
                  >
                    <Link
                      to="/workoutplan"
                      className="block px-4 py-2 hover:text-white"
                      onClick={() => setIsServicesOpen(false)} // Close dropdown
                    >
                      Workout Plan
                    </Link>
                    <Link
                      to="/dietplan"
                      className="block px-4 py-2 hover:text-white"
                      onClick={() => setIsServicesOpen(false)} // Close dropdown
                    >
                      Diet Plan
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link to="/benifits" className="hover:text-white">Benefits</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white">Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>

          {/* Join Us Button */}
          <button className="hidden md:block bg-red-600 text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-red-700">
            Join Us Now
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsNavbarOpen(true)}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu */}
        {isNavbarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
            <div className="flex flex-col gap-6 text-gray-400 text-lg px-6 py-8">
              <button
                className="text-white text-2xl self-end"
                onClick={() => setIsNavbarOpen(false)}
              >
                &#10005;
              </button>
              <Link
                to="/"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                About
              </Link>
              <div>
                <button
                  className="hover:text-white"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Our Services ↓
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 text-gray-400">
                    <Link
                      to="/workoutplan"
                      onClick={() => {
                        setIsNavbarOpen(false);
                        setIsMobileServicesOpen(false); // Close dropdown
                      }}
                      className="block py-2 hover:text-white"
                    >
                      Workout Plan
                    </Link>
                    <Link
                      to="/dietplan"
                      onClick={() => {
                        setIsNavbarOpen(false);
                        setIsMobileServicesOpen(false); // Close dropdown
                      }}
                      className="block py-2 hover:text-white"
                    >
                      Diet Plan
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/benifits"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Benefits
              </Link>
              <Link
                to="/blogs"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
