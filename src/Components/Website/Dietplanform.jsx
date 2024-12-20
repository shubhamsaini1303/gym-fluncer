
const Dietplanform = () => {
  return (
    <div className="mt-10 min-h-screen" id="dietform" data-aos="fade-up"
    data-aos-delay="300">
    <div className="min-h-screen bg-transparent px-4 py-8 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-black opacity-60 shadow-md p-6 md:p-10 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center  mb-6 uppercase" style={{color:"#EB0000"}}>
          Personalized Diet Plan Form
        </h1>

        {/* Personal Details */}
        <section>
          <h2 className="text-lg font-bold  mb-2 uppercase" style={{color:"#EB0000"}}>
            Personal Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Eg: 25"
              className="p-2 border rounded bg-black text-white placeholder-gray-400"
              style={{backgroundColor:"#1A1A1A"}}
            />
            <select className="p-2 border rounded  text-white" style={{backgroundColor:"#1A1A1A"}}>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input
              type="text"
              placeholder="Eg: 5'8” or 175 cm"
              className="p-2 border rounded bg-black text-white placeholder-gray-400"
              style={{backgroundColor:"#1A1A1A"}}

            />
            <input
              type="text"
              placeholder="Eg: 150 lbs or 68 kg"
              className="p-2 border rounded bg-black text-white placeholder-gray-400"
              style={{backgroundColor:"#1A1A1A"}}

            />
          </div>
          <select className="w-full mt-4 p-2 border rounded bg-black text-white" style={{backgroundColor:"#1A1A1A"}}>
            <option>Activity Level</option>
            <option>Sedentary</option>
            <option>Moderately Active</option>
            <option>Active</option>
          </select>
        </section>

        {/* Dietary Goals */}
        <section className="mt-6">
          <h2 className="text-lg font-bold  mb-2 uppercase" style={{color:"#EB0000"}}>
            Dietary Goals
          </h2>
          <select className="w-full p-2 border rounded bg-black text-white mb-4" style={{backgroundColor:"#1A1A1A"}}>
            <option>Select Goal</option>
            <option>Weight Loss</option>
            <option>Muscle Gain</option>
          </select>
          <input
            type="text"
            placeholder="Eg: Weight loss, Muscle gain..."
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400" style={{backgroundColor:"#1A1A1A"}}
          />
        </section>

        {/* Preferences */}
        <section className="mt-6">
          <h2 className="text-lg font-bold  mb-2 uppercase" style={{color:"#EB0000"}}>
            Dietary Preferences and Restrictions
          </h2>
          <select className="w-full p-2 border rounded bg-black text-white mb-4" style={{backgroundColor:"#1A1A1A"}}>
            <option>Diet Type</option>
            <option>Vegetarian</option>
            <option>Vegan</option>
          </select>
          <input
            type="text"
            placeholder="Eg: Nuts, Dairy, Gluten..."
            style={{backgroundColor:"#1A1A1A"}}
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400 mb-4"
          />
          <input
            type="text"
            style={{backgroundColor:"#1A1A1A"}}
            placeholder="Eg: Mushrooms, Seafood..."
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400"
          />
        </section>

        {/* Health Info */}
        <section className="mt-6">
          <h2 className="text-lg font-bold  mb-2 uppercase" style={{color:"#EB0000"}}>
            Health Information
          </h2>
          <input
            type="text"
            style={{backgroundColor:"#1A1A1A"}}
            placeholder="Eg: Diabetes"
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400 mb-4"
          />
          <input
            type="text"
            placeholder="Eg: High-protein"
            style={{backgroundColor:"#1A1A1A"}}
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400"
          />
        </section>

        {/* Meal Preferences */}
        <section className="mt-6">
          <h2 className="text-lg font-bold  mb-2 uppercase" style={{color:"#EB0000"}}>
            Meal and Lifestyle Preferences
          </h2>
          <select className="w-full p-2 border rounded bg-black text-white mb-4" style={{backgroundColor:"#1A1A1A"}}>
            <option>Enter meals per day (e.g., 3)</option>
          </select>
          <input
            type="text"
            style={{backgroundColor:"#1A1A1A"}}
            placeholder="Eg: Quick meals, Homemade recipes..."
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400 mb-4"
          />
          <input
            type="text"
            style={{backgroundColor:"#1A1A1A"}}
            placeholder="Eg: $50 per week, Affordable meals..."
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400"
          />
        </section>

        {/* Current Eating Habits */}
        <section className="mt-6" >
          <h2 className="text-lg font-bold  mb-2 uppercase" style={{color:"#EB0000"}}>
            Current Eating Habits
          </h2>
          <input
            type="text"
            style={{backgroundColor:"#1A1A1A"}}
            placeholder="Eg: Breakfast - Eggs, Lunch..."
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400 mb-4"
          />
          <input
            type="text"
            style={{backgroundColor:"#1A1A1A"}}
            placeholder="Eg: 2 times a week, Occasionally..."
            className="w-full p-2 border rounded bg-black text-white placeholder-gray-400"
          />
        </section>

        {/* Submit */}
        <button className="w-full mt-6 py-2 text-white text-lg font-bold rounded hover:bg-red-600" style={{backgroundColor:"#EB0000"}}>
          Submit
        </button>
      </div>
    </div>
    </div>

  );
};

export default Dietplanform
