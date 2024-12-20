

import { HeroSection } from "../../Style/Style";
import { AnimatedTooltip } from "../../Components/ui/animated-tooltip";
import Services from "../../Pages/Website/Services";
import Benifits from "./Benifits";
import Nearest from "../../Components/Website/Nearest";
import Blogs from "./Blogs";
import Review from "../../Components/Website/review";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";

const people = [
  {
    id: 1,
    name: "Aliva Rash",
    designation: "Software Engineer",
    image: "Images/user1.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "Images/user2.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "Images/user3.png",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection>
        <div className="mt-8 py-8">
        <div
          className="flex mx-auto  border flex-row h-[50px] border-gray-500 items-center justify-center mb-10 w-[330px] rounded-3xl"
          style={{ backgroundColor: "#28282C" }}
          data-aos="fade-down"
        >
          <AnimatedTooltip className="border- border-red-800" items={people} />
          <h1 className="ml-6 text-[14px] text-white">Trusted by 3+ million users</h1>
        </div>

        <div
          className="text-center mx-auto w-[90%] lg:w-[900px] h-auto"
          data-aos="fade-up"
        >
          <h1 className="text-[40px] lg:text-[85px]" style={{ color: "#EB0000" }}>
            Track Your Fitness Journey
          </h1>
          <p className="text-white">
            Discover the ultimate fitness companion with GymFluencer. Effortlessly
            log your workouts, count reps, and track calories burned. Stay
            motivated and achieve your goals with ease.
          </p>
        </div>
        </div>
      </HeroSection>

      {/* About  */}
      <About/>

      {/* Services */}
      <Services />

      {/* Benefits */}
      <Benifits />

      {/* Review */}
      <Review />

      {/* Nearest Gym */}
      <Nearest />

      {/* Blogs */}
      <Blogs />

      {/* Final Image Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 w-full md:h-[400px]"
        data-aos="fade-left"
      >
        <div>
          <img
            src="/Images/Section4.jpg"
            className="md:h-[400px] w-full object-cover"
            alt="Section 4"
          />
        </div>
        <div>
          <img
            src="/Images/Section5.jpg"
            className="md:h-[400px] w-full object-cover"
            alt="Section 5"
          />
        </div>
        
      </div>
    </>
  );
};

export default Home;
