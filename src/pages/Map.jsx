import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer.jsx"

const Map = () => {
  return (
    <>
    <Navbar menu />
       <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center ">
        <div className="inner-cont w-[50%] h-[100%] bg-white">
            <div className="main w-full h-[calc(100%-60px)] ">

            </div>
            <Footer />
        </div>
       </div>
    </>
  )
}

export default Map
