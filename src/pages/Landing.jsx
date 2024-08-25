import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <Navbar signup signin />
      <div className="main w-[100vw] h-[calc(100vh-70px)] bg-[#ffdab9] flex items-center justify-center ">
        <div className="textbox flex justify-center items-center flex-col  w-[30%]">
            <h1 className='text-[50px] font-bold'>MENO MATE</h1>
            <p className=' text-center m-[5px]'>MenoMate is a website where womans can get help during their periods and during other biological phases</p>
            <NavLink to="/signin" ><button className='bg-black text-white p-[8px] rounded-[10px]'>lets start</button></NavLink>
        </div>
      </div>
    </>
  )
}

export default Landing
