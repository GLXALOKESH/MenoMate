import React from 'react'
import Wellnessbox from "../components/wellnessbox.jsx"
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const Wellness = () => {
  return (
    <>
<Navbar/>
    <div className='flex flex-wrap bg-white w-[50%] '>
      <Wellnessbox path="water.svg"/> 
      <Wellnessbox path="meditation.svg"/> 
      <Wellnessbox path="food.svg"/> 
      <Wellnessbox path="game.svg"/> 
      <Wellnessbox path="chat1.svg"/> 
       </div>
       <Footer/>
       
       
    </>


  )
  
}
export default Wellness
