import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Website/Footer'
import Navbar from '../../Components/Website/Navabar'

const MainWeb = () => {
  return (
    <div className='overflow-hidden bg-black'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainWeb