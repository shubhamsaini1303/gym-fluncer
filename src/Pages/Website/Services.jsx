
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/Images/Link.png",
  "/Images/Link-1.png",
  "/Images/Link-2.png",
  "/Images/Link-3.png",
  "/Images/Link-4.png",
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black">
      {/* Header Section */}
      <div
        className="h-auto text-center mx-auto max-w-[90%] md:w-[900px] py-8"
        data-aos="fade-up"
      >
        <h1 className="text-[25px] md:text-[35px]" style={{ color: "#EB0000" }}>
          OUR SERVICES
        </h1>
        <p className="text-white text-sm md:text-base">
          GymFluencer offers 5 essential services to help you
        </p>
        <p className="text-white text-sm md:text-base">
          achieve your fitness goals with ease and flexibility.
        </p>
      </div>

      {/* Services Images Section */}
      <div
        className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4"
        data-aos="fade-left"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // Adds staggered animation
          >
            <img
              src={img}
              alt={`Service ${index + 1}`}
              className="h-auto w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
