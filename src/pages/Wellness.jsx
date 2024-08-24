import React from 'react'
import Wellnessbox from "../components/wellnessbox.jsx"
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const Wellness = () => {
  return (
    <>
<Navbar menu />
<div className="outer-cont w-[100vw] h-[calc(100vh-70px)] flex justify-center ">
    <div className='flex flex-col bg-white w-[50%] '>
      <div className="inn flex flex-wrap h-[calc(100%-60px)] ">
      <Wellnessbox path="water.svg"/> 
      <Wellnessbox path="meditation.svg"/> 
      <Wellnessbox path="food.svg"/> 
      <Wellnessbox path="game.svg"/> 
      <Wellnessbox path="chat1.svg"/> 
      </div>
       <Footer/>
       </div>
       
       </div>
    </>


  )
  
}
export default Wellness
