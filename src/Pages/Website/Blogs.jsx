
// const blogs = [
//   {
//     id: 1,
//     category: "Exercise",
//     title: "Conquering Consistency: How to Make Exercise a Habit You Love",
//     date: "Jun 28, 2024",
//     author: "Benjamin",
//     image: "/Images/Ak1npcHaOL6HZDqt4s8onDlRbY.jpg.jpg", // Replace with actual image paths
//   },
//   {
//     id: 2,
//     category: "Weight Loss",
//     title: "Weight Loss: A Sustainable Approach for a Healthier You",
//     date: "Jun 26, 2024",
//     author: "Jessica",
//     image: "/Images/eZhVZiqwYqckpfqk8iVFqSYsQk.jpg.jpg",
//   },
//   {
//     id: 3,
//     category: "Nutrition",
//     title: "Fuel Your Fitness: A Guide to Nutrition for Peak Performance",
//     date: "Jun 23, 2024",
//     author: "David",
//     image: "/Images/vC9giEjmPcdMUbgxGuPwaw1fJg.jpg.jpg",
//   },
// ];

// const Blogs = () => {
//   return (
//     <section className="bg-black  py-10 px-5 sm:px-10 lg:px-20">
//       <h2 className="text-red-500 text-center uppercase text-3xl sm:text-4xl font-bold mb-8" style={{color:"#EB0000"}}>Our Latest Blogs</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2 relative">
//           <img
//             src={blogs[0].image}
//             alt={blogs[0].title}
//             className="rounded-lg w-full  h-[470px] object-cover "
//           />
//           <div className="absolute bottom-5 left-5  text-white p-4 rounded-lg">
//             <span className="text-white  text-sm uppercase">
//               <button className="h-[40px] w-[160px] rounded-lg " style={{backgroundColor:"#EB0000"}}>
//               {blogs[0].category}
//               </button>
//             </span> 
//             <h3 className="text-xl sm:text-2xl font-bold mt-2">
//               {blogs[0].title}</h3>
//             <p className="text-sm mt-2 flex items-center">
//               <span>{blogs[0].date}</span>
//               <span className="mx-2">•</span>
//               <span>{blogs[0].author}</span>
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col gap-6">
//           {blogs.slice(1).map((blog) => (
//             <div key={blog.id} className="relative">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="rounded-lg w-full object-cover h-45"
//               />
//               <div className="absolute bottom-3 left-3  text-white p-3 rounded-lg">
//                 <span className="text-white text-sm uppercase">
//                 <button className="h-[40px] w-[160px] rounded-lg  bg-orange-400">
//                 {blog.category}
//               </button>
//                  </span>
//                 <h3 className="text-lg font-bold mt-1">{blog.title}</h3>
//                 <p className="text-xs mt-1 flex items-center">
//                   <span>{blog.date}</span>
//                   <span className="mx-2">•</span>
//                   <span>{blog.author}</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogs;


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    id: 1,
    category: "Exercise",
    title: "Conquering Consistency: How to Make Exercise a Habit You Love",
    date: "Jun 28, 2024",
    author: "Benjamin",
    image: "/Images/Ak1npcHaOL6HZDqt4s8onDlRbY.jpg.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    category: "Weight Loss",
    title: "Weight Loss: A Sustainable Approach for a Healthier You",
    date: "Jun 26, 2024",
    author: "Jessica",
    image: "/Images/eZhVZiqwYqckpfqk8iVFqSYsQk.jpg.jpg",
  },
  {
    id: 3,
    category: "Nutrition",
    title: "Fuel Your Fitness: A Guide to Nutrition for Peak Performance",
    date: "Jun 23, 2024",
    author: "David",
    image: "/Images/vC9giEjmPcdMUbgxGuPwaw1fJg.jpg.jpg",
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black py-10 px-5 sm:px-10 lg:px-20">
      <h2
        className="text-red-500 text-center uppercase text-3xl sm:text-4xl font-bold mb-8"
        style={{ color: "#EB0000" }}
        data-aos="fade-up"
      >
        Our Latest Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="md:col-span-2 relative"
          data-aos="fade-right"
        >
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="rounded-lg w-full h-[470px] object-cover"
          />
          <div className="absolute bottom-5 left-5  md:mb-[150px] text-white p-4 rounded-lg">
            <span className="text-white text-sm uppercase">
              <button
                className="h-[40px] w-[160px] rounded-lg"
                style={{ backgroundColor: "#EB0000" }}
              >
                {blogs[0].category}
              </button>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2">
              {blogs[0].title}
            </h3>
            <p className="text-sm mt-2 flex items-center">
              <span>{blogs[0].date}</span>
              <span className="mx-2">•</span>
              <span>{blogs[0].author}</span>
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-6"
          data-aos="fade-left"
        >
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-lg w-full object-cover h-[250px] sm:h-[300px]"
              />
              <div className="absolute bottom-3 left-3 text-white p-3 rounded-lg">
                <span className="text-white text-sm uppercase">
                  <button className="h-[40px] w-[160px] rounded-lg bg-orange-400">
                    {blog.category}
                  </button>
                </span>
                <h3 className="text-lg font-bold mt-1">{blog.title}</h3>
                <p className="text-xs mt-1 flex items-center">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
