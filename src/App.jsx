import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainWeb from "./Pages/Website/MainWeb"
import Home from "./Pages/Website/Home"
import About from "./Pages/Website/About"
import Services from "./Pages/Website/Services"
import Benifits from "./Pages/Website/Benifits"
import Blogs from "./Pages/Website/Blogs"
import Contact from "./Pages/Website/Contact"
import Dietplanform from "./Components/Website/Dietplanform"
import Workoutplanform from "./Components/Website/Workoutplanform"
import Workoutplan from "./Components/Website/WorkoutPlan"
import Dietplan from "./Components/Website/Dietplan"
import Nearest from "./Components/Website/Nearest"
const App = () => {

  const routes = createBrowserRouter([{
    path:"/",
    element:<MainWeb/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/our Services",
        element:<Services/>
      },
      {
        path:"/benifits",
        element:<Benifits/>
      },
      {
        path:"/blogs",
      element:<Blogs/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/dietplanform",
        element:<Dietplanform/>
      },
      {
        path:"/workoutplanform",
        element:<Workoutplanform/>
      },
      {
        path:"/workoutplan",
        element:<Workoutplan/>
      },
      {
        path:"/dietplan",
        element:<Dietplan/>
      },
      {
        path:"/faqs",
        element:<Nearest/>
      }
    ]
  }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App