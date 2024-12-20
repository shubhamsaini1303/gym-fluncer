/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black w-full">
      {/* Hero Section */}
      <div className="h-[300px]">
        <img
          src="/Images/Section.jpg"
          className="h-[300px] w-full object-cover"
          alt="Section Banner"
          data-aos="fade-down"
        />
      </div>

      {/* Heading Section */}
      <div className="h-auto w-full py-4">
        <h1
          className="text-center text-white text-sm md:text-lg py-2 px-4"
          style={{ backgroundColor: "#EB0000" }}
          data-aos="fade-up"
        >
          Workout Routines · Progress Tracking · Fitness Plans
        </h1>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8">
        {/* Left Image */}
        <div className="h-[400px]" data-aos="fade-right">
          <img
            src="/Images/Section2.jpg"
            className="h-[400px] w-full object-cover rounded-md"
            alt="Workout"
          />
        </div>

        {/* Right Images */}
        <div
          // className="flex flex-wrap md:flex-col items-center justify-center gap-4"
          className="flex items-center justify-center gap-4 flex:wrap "
          data-aos="fade-left"
        >
          <img
            src="/Images/C1L73jv5kSygRY7CLsvDz5CD8.png.jpg"
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover rounded-md"
            alt="Routine 1"
          />
          <img
            src="/Images/C1L73jv5kSygRY7CLsvDz5CD8.png.jpg"
            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover rounded-md"
            alt="Routine 2"
          />
        </div>
      </div>

      {/* Review Section */}
      <div className="py-8 px-4" id="review">
        <h1
          className="text-center text-[24px] md:text-[30px] text-white font-bold mb-8"
          data-aos="fade-up"
        >
          WHAT PEOPLE SAY
        </h1>

        <div
          className="flex flex-wrap justify-center gap-6"
          data-aos="fade-up"
        >
          {/* Review Card 1 */}
          
          <div
            className="flex flex-col md:flex-row items-center bg-gray-800 text-white rounded-xl p-4 shadow-lg w-[300px] md:w-[500px]"
            data-aos="fade-right"
          >
            <img
              src="/Images/2xpZXjM4AhwduCRhoAnVxztrfIk.jpg.jpg"
              className="h-[150px] w-[150px] md:h-[250px] md:w-[200px] rounded-md object-cover"
              alt="Reviewer 1"
            />
            <div className="flex flex-col justify-center mt-4 md:mt-0 md:ml-4">
              <img
                src="/Images/stars.png"
                className="h-[30px] w-auto mb-2"
                alt="Rating"
              />
              <p>"The workout routines are incredibly helpful!"</p>
            </div>
          </div>

          {/* Review Card 2 */}
          <div
            className="flex flex-col md:flex-row items-center bg-gray-800 text-white rounded-xl p-4 shadow-lg w-[300px] md:w-[500px]"
            data-aos="fade-left"
          >
            <img
              src="/Images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg.jpg"
              className="h-[150px] w-[150px] md:h-[250px] md:w-[200px] rounded-md object-cover"
              alt="Reviewer 2"
            />
            <div className="flex flex-col justify-center mt-4 md:mt-0 md:ml-4">
              <img
                src="/Images/stars.png"
                className="h-[30px] w-auto mb-2"
                alt="Rating"
              />
              <p>"Great fitness plans with excellent tracking tools."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
