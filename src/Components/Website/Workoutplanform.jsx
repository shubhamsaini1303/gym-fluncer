
const Workoutplanform = () => {
  return (
    <div className=" mt-10 min-h-screen" id="workoutform" data-aos="fade-up"
    data-aos-delay="300">
    <div className="min-h-screen  text-white px-4 py-8 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto p-6 md:p-10 bg-black opacity-60 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-8 uppercase" style={{color:"#EB0000"}}>
          Personalized Workout Plan Form
        </h1>

        {/* 1. Fitness Goals */}
        <section>
          <h2 className="text-xl font-bold  mb-2" style={{color:"#EB0000"}} >1. Fitness Goals</h2>
          <p className="mb-2 text-gray-400">Primary Goals:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4" >
            {["Weight Loss", "Muscle Gain", "Endurance", "Flexibility", "Overall Fitness"].map(
              (goal, index) => (
                <label key={index} className="flex items-center space-x-2" >
                  <input type="checkbox" className="form-checkbox " style={{color:"#EB0000"}} / >
                  <span>{goal}</span>
                </label>
              )
              
            )}
          </div>

          <p className="mb-2 text-gray-400">Specific Areas of Focus:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {["Upper Body", "Lower Body", "Core", "Full Body"].map((focus, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox " style={{color:"#EB0000"}} />
                <span>{focus}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 2. Current Fitness Level */}
        <section>
          <h2 className="text-xl font-bold  mb-2" style={{color:"#EB0000"}}>2. Current Fitness Level</h2>
          <p className="text-gray-400 mb-2">Fitness Level:</p>
          <select className="w-full p-2 rounded bg-gray-800 border text-white mb-4">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <p className="mb-2 text-gray-400">Exercise Experience:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {["Squats", "Push-Ups", "Cardio Machines", "Others"].map((exercise, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox " style={{color:"#EB0000"}} />
                <span>{exercise}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 3. Physical Measurements */}
        <section>
          <h2 className="text-xl font-bold  mb-2" style={{color:"#EB0000"}}>
            3. Physical Measurements and Health Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Age: 25"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <select className="w-full p-2 rounded bg-gray-800 text-white">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input
              type="text"
              placeholder="Height: 5'8 or 175 cm"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Weight: 150 lbs or 68 kg"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <input
            type="text"
            placeholder="Injuries or Physical Limitations"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 mb-4"
          />
          <input
            type="text"
            placeholder="Medical Conditions"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />
        </section>

        {/* 4. Workout Preferences */}
        <section>
          <h2 className="text-xl font-bold  mb-2" style={{color:"#EB0000"}}>4. Workout Preferences</h2>
          <p className="mb-2 text-gray-400">Preferred Workout Types:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {["Strength Training", "Cardio", "Yoga", "HIIT", "Bodyweight"].map((type, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox " style={{color:"#EB0000"}} />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 5. Schedule */}
        <section>
          <h2 className="text-xl font-bold  mb-2" style={{color:"#EB0000"}}>5. Schedule and Time Availability</h2>
          <p className="mb-2 text-gray-400">Days Available for Workouts:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
              (day, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox " style={{color:"#EB0000"}} />
                  <span>{day}</span>
                </label>
              )
            )}
          </div>
        </section>

        {/* Submit Button */}
        <button className="w-full  text-white font-bold text-lg py-2 rounded hover:bg-red-700 transition" style={{backgroundColor:"#EB0000"}}>
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default Workoutplanform;
