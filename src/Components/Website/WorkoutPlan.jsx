
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Workoutplan() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="text-center py-12 px-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="text-3xl md:text-5xl text-red-500 font-bold mb-4">
          WHAT IS THE WORKOUT PLAN
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A workout plan is a structured schedule of exercises designed to help
          you reach your fitness goals, stay active, and improve your health.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 px-4"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h2 className="text-3xl font-bold text-red-500 text-center mb-6">
          WHAT WE OFFER:
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {[
            {
              icon: "/Images/Background-icon.jpg",
              text: "Customized Workout Plans",
            },
            {
              icon: "/Images/Background-icon.jpg",
              text: "Professional Guidance",
            },
            {
              icon: "/Images/Background-icon.jpg",
              text: "Holistic Approach",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-center w-40"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="p-4 bg-black  rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <img src={`${service.icon}`} alt="" className="w-[40px] h-[30px]" />
                {/* <i className={`${service.icon} text-red-500 text-xl`}></i> */}
              </div>
              <p className="text-gray-300 mt-2">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workout Plans */}
      <section
        className="w-full mx-auto py-12 px-4"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h2 className="text-3xl font-bold text-red-500 text-center mb-6">
          SELECT YOUR WORKOUT PLAN
        </h2>
        <p className="text-lg text-center text-gray-300 max-w-xl mx-auto mb-6">
          Choose a workout plan that fits your goals, whether it’s building
          strength, losing weight, or staying active. Find the perfect plan for
          you!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "Images/A7pdLQOKkfozfphlzB5zvvzUSbg.jpg",
              title: "Beginner",
              description:
                "Start your fitness journey with simple and effective exercises.",
            },
            {
              image: "/Images/KdiY7dNkalDnlUrQOJuxJen0fq4.jpg",
              title: "Intermediate",
              description: "Build your strength with challenging workouts.",
            },
            {
              image: "Images/WRmaXFrPEq17Lyab8nqbUFOL1O8.jpg",
              title: "Advanced",
              description: "Push your limits with high-intensity workouts.",
            },
            {
              image: "/Images/TGaCkXYXttk4cqQM2LYZqA4ZL3o.jpg",
              title: "Personalized Plan",
              description: "Create your own workout plan tailored for you.",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className=" overflow-hidden shadow-lg rounded-md"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="p-4 bg-black">
                <h3 className="text-xl font-semibold text-red-500">
                  {plan.title}
                </h3>
                <p className="text-gray-300 mt-2">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
  <div className="" id="workoutplan">
  <section
        className="mt-10 py-12 px-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="max-w-6xl md:w-[830px] bg-black bg-opacity-60  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4  p-2 md:w-[500px]">
            <h1
              className="text-3xl font-bold"
              style={{ color: "#EB0000" }}
            >
              Kickstart Your <br /> Fitness Journey <br /> with Gymfluencer
            </h1>
            <h2 className="text-gray-300 md:w-[400px]">
              Experience all that GymFluencer has to offer with a free trial.
              Explore our world-class amenities, personalized diet plans, and
              professional training programs—absolutely free.
            </h2>
            <img src="/Images/logo.png" alt="Logo" className="mt-4" />
          </div>
          <div>
            <form className="bg-black bg-opacity-80 p-6 md:w-[400px] shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-gray-300 text-sm mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Kamal Raj"
                    className="bg-gray-800 text-gray-100 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-gray-300 text-sm mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="12024561414"
                    className="bg-gray-800 text-gray-100 rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="text-gray-300 text-sm mb-1 block"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="iam.kamalrajp@gmail.com"
                  className="bg-gray-800 text-gray-100 rounded-md h-10 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="services"
                  className="text-gray-300 text-sm mb-1 block"
                >
                  Services
                </label>
                <select
                  id="services"
                  className="bg-gray-800 text-gray-100 rounded-md h-10 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>Personalized Diet Plans</option>
                  <option>Fitness Training</option>
                  <option>Wellness Consultation</option>
                </select>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="branch"
                  className="text-gray-300 text-sm mb-1 block"
                >
                  Branch
                </label>
                <select
                  id="branch"
                  className="bg-gray-800 text-gray-100 rounded-md h-10 px-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white rounded-md h-10 w-full mt-6 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
  </div>
      <div className="h-16"></div>
    </div>
  );
}

export default Workoutplan;
