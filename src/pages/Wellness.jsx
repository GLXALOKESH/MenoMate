import React from 'react'
import Wellnessbox from "../components/wellnessbox.jsx"
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { NavLink } from 'react-router-dom'
const Wellness = () => {
  return (
    <>
{/* <Navbar menu />
<div className="outer-cont w-[100vw] h-[calc(100vh-70px)] flex justify-center ">
    <div className='flex flex-col bg-white w-[50%] '>
      <div className="inn flex flex-wrap h-[calc(100%-60px)] ">
     
      </div>
       <Footer/>
       </div>
       
       </div> */}

       <Navbar menu />
       <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center ">
        <div className="inner-cont max-sm:w-[100%] w-[50%] h-[100%] bg-white">
            <div className="main w-full h-[calc(100%-60px)] flex  max-sm:flex-wrap">
            <Wellnessbox path="water.svg"/> 
      <Wellnessbox path="meditation.svg"/> 
   <NavLink to="/food"><Wellnessbox path="food.svg"/> </NavLink>
      <Wellnessbox path="game.svg"/> 
      <Wellnessbox path="chat1.svg"/>
            </div>
            <Footer />
        </div>
       </div>
    </>


  )
  
}
export default Wellness
