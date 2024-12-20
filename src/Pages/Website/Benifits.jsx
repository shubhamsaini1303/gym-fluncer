

import { GoPeople } from "react-icons/go";
import { IoStarOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black w-full py-8">
      {/* Benefits Heading */}
      <div className="text-white text-center px-4 md:px-0">
        <h1
          className="text-xl mx-auto w-fit rounded-3xl py-2 px-6 border-2"
          data-aos="fade-up"
        >
          ☆ Our Benefits
        </h1>
        <h1
          className="text-2xl md:text-5xl my-4"
          style={{ color: "#EB0000" }}
          data-aos="fade-up"
        >
          Discover GymFluencer Benefits
        </h1>
        <p
          className="text-gray-400"
          data-aos="fade-up"
        >
          Unlock your full potential with GymFluencer — your personal fitness partner for progress and motivation.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 py-8">
        {/* Left Section */}
        <div className="space-y-6">
          <div
            className="text-white bg-gray-900 p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "#09090A" }}
            data-aos="fade-right"
          >
            <h1 className="text-center mx-auto rounded-lg mb-4 text-2xl border-2 w-12 h-12 flex items-center justify-center">
              <GoPeople />
            </h1>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#EB0000" }}>
              Effortless Workout Logging
            </h3>
            <p className="text-gray-400">
              Easily log your workouts and monitor your progress over time with our intuitive logging feature.
            </p>
          </div>
          <div
            className="text-white bg-gray-900 p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "#09090A" }}
            data-aos="fade-right"
          >
            <h1 className="text-center mx-auto rounded-lg mb-4 text-2xl border-2 w-12 h-12 flex items-center justify-center">
              <IoEarthOutline/>
            </h1>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#EB0000" }}>
              Accurate Rep Counting
            </h3>
            <p className="text-gray-400">
              Count your reps accurately with our app, ensuring consistency and improved performance.
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div
          className="flex justify-center items-center"
          data-aos="zoom-in"
        >
          <img
            src="/Images/Container2-removebg-preview.png"
            alt="Gym Illustration"
            className="w-72 md:w-80 md:h-[500px] rounded-3xl"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div
            className="text-white bg-gray-900 p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "#09090A" }}
            data-aos="fade-left"
          >
            <h1 className="text-center mx-auto rounded-lg mb-4 text-2xl border-2 w-12 h-12 flex items-center justify-center">
              <IoStarOutline/>
            </h1>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#EB0000" }}>
              Personalized Workout Plans
            </h3>
            <p className="text-gray-400">
              AI-powered workout plans tailored to your fitness level, goals, and progress.
            </p>
          </div>
          <div
            className="text-white bg-gray-900 p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "#09090A" }}
            data-aos="fade-left"
          >
            <h1 className="text-center mx-auto rounded-lg mb-4 text-2xl border-2 w-12 h-12 flex items-center justify-center">
            <FaRegSmile/>
            </h1>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#EB0000" }}>
              Calorie Calculation & Diet Plans
            </h3>
            <p className="text-gray-400">
              Calculate calories burned and access AI-customized meal plans for optimal nutrition and wellness.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Benefits;
