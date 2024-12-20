
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Nearest = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="h-auto bg-black text-white flex flex-col items-center justify-center px-4 md:px-8 py-10">
      <h1
        className="text-red-500 text-center text-3xl md:text-5xl font-bold mb-4"
        style={{ color: "#EB0000" }}
        data-aos="fade-up"
      >
        FIND YOUR NEAREST GYM
      </h1>
      <p
        className="text-center text-gray-300 text-sm md:text-lg mb-8"
        data-aos="fade-up"
      >
        Easily discover gyms near your location to kickstart your fitness journey
        today!
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Gym Card 1 */}
          <div
            className="bg-red-500 rounded-lg p-4 shadow-md flex flex-col md:flex-row items-center"
            data-aos="fade-right"
          >
            <img
              src="/Images/img1.jpg"
              alt="Physc Gym"
              className="rounded-md w-full md:w-32 h-32 object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-4 flex-1">
              <h2 className="text-lg font-semibold">Physc Gym Nerul 24/7</h2>
              <p className="text-sm mt-1">📞 +91 1234567890</p>
              <p className="text-sm mt-1">
                📍 Nerul, Navi Mumbai, Maharashtra, 400706
              </p>
            </div>
          </div>
          {/* Gym Card 2 */}
          <div
            className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col md:flex-row items-center"
            data-aos="fade-right"
          >
            <img
              src="/Images/img2.jpg"
              alt="Iron Fitness"
              className="rounded-md w-full md:w-32 h-32 object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-4 flex-1">
              <h2 className="text-lg font-semibold">Iron Fitness</h2>
              <p className="text-sm mt-1">📞 +91 1234567890</p>
              <p className="text-sm mt-1">📍 Nerul, Navi Mumbai</p>
            </div>
          </div>
          {/* Gym Card 3 */}
          <div
            className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col md:flex-row items-center"
            data-aos="fade-right"
          >
            <img
              src="/Images/img3.jpg"
              alt="Hydropower Fitness & Gym"
              className="rounded-md w-full md:w-32 h-32 object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-4 flex-1">
              <h2 className="text-lg font-semibold">Hydropower Fitness & Gym</h2>
              <p className="text-sm mt-1">📞 +91-22-0001-0211</p>
              <p className="text-sm mt-1">📍 Nerul, Navi Mumbai</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div
          className="flex-1 h-80 md:h-auto rounded-lg overflow-hidden"
          data-aos="fade-left"
        >
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.463924210545!2d73.010012!3d19.03244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1f382f5b0f1%3A0xf8c1309b207b768!2sNerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1675958475946!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Nearest;
