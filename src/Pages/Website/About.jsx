import { Background } from "../../Style/Style";


const About = () => {
  return (
    <div>
         {/* Section 2 */}
         <div className="h-[80px] bg-black"></div>

<Background>
  <div className="w-full h-auto px-4">
    <div
      className="text-center mx-auto w-full lg:w-[900px]"
      data-aos="fade-left"
    >
      <h1 className="text-[40px] lg:text-[66px]" style={{ color: "#EB0000" }}>
        
        YOUR FITNESS.
      </h1>
      <h1 className="text-[40px] lg:text-[66px]" style={{ color: "#EB0000" }}>
        OUR MISSION.
      </h1>
      <p className="text-gray-400">
        At GymFluencer, our mission is simple: to provide the tools and
        support you need to reach your fitness goals. We combine
        innovative technology with personalized guidance to make fitness
        easier, more accessible, and more motivating. Join us as we help
        you.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
        <h1 className="text-[40px] lg:text-[60px] font-bold">422k+</h1>
        <p className="text-gray-400">
          Workouts logged and progress tracked every day
        </p>
      </div>
      <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
        <h1 className="text-[40px] lg:text-[60px] font-bold">122k+</h1>
        <p className="text-gray-400">
          Fitness enthusiasts connected through our platform
        </p>
      </div>
      <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
        <h1 className="text-[40px] lg:text-[60px] font-bold">2k+</h1>
        <p className="text-gray-400">
          Countries where GymFluencer is making an impact
        </p>
      </div>
    </div>

    <div className="flex justify-center mt-10" data-aos="fade-up">
      <img
        src="/Images/Container.jpg"
        className="h-auto w-full lg:w-[670px] border-none"
        alt="Container"
      />
    </div>
  </div>
</Background>
    </div>
  )
}

export default About