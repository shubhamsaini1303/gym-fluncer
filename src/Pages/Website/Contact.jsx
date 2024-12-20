
const Contact = () => {
  return (
    <div>
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
    </div>
  )
}

export default Contact