import React from 'react'
import Navbar from '../compinents/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'

  
const Home = () => {
  return (
    <div >
        <Announcement/>
        <Navbar/>
        <Slider/> 
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home