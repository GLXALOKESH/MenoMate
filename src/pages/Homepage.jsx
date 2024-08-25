import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx'
import Symptomps from '../components/symptomps.jsx'
const Homepage = () => {
  return (
    <>
      <Navbar menu />
      <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center overflow-hidden"> {/* Added overflow-hidden */}
        <div className="inner-cont max-sm:w-[100%]  w-[50%] h-full bg-white flex flex-col">
          <div className="days h-[50px] w-[100%] bg-[#ffdab9] flex ">
            
            <div className="day w-[14.3%] h-full border border-[#fffacd] flex justify-center items-center">
              1 FEB
            </div>
            <div className="day w-[14.3%] h-full border border-[#fffacd] flex justify-center items-center">
              1 FEB
            </div>
            <div className="day w-[14.3%] h-full border border-[#fffacd] flex justify-center items-center">
              1 FEB
            </div>
            <div className="day w-[14.3%] h-full border border-[#fffacd] flex justify-center items-center">
              1 FEB
            </div>
            <div className="day w-[14.3%] h-full border border-[#fffacd] flex justify-center items-center">
              1 FEB
            </div>
            <div className="day w-[14.3%] h-full border border-[#fffacd] flex justify-center items-center">
              1 FEB
            </div>
            <div className="day w-[14.3%] h-full border border-[#fffacd] flex justify-center items-center">
              1 FEB
            </div>
          </div>


          <div className="main w-full flex-grow "> 
            <div className="part1 w-full h-[50%] flex border-[#fffacd] border-[2px] ">
              <div className="counter h-full w-[50%] p-[5px]">
                <div className="circle bg-[#ffdab9] h-full aspect-square rounded-full justify-center items-center">
                  <div className="texts   h-full flex flex-col  justify-center items-center ">
                    <p className="1 text-[25px]">Periods</p>
                    <p className="2 text-[70px] font-bold">6</p>
                    <p className="3 text-[30px]">days</p>
                    <p className="4 text-[20px]">left</p>
                  </div>
                </div>
              </div>
              <div className="text p-3">
                <div className="result mt-[30px]">Your symptomps says your 
                periods going to end soon </div>
                <div className="water mt-[20px]">Water consumed :-  2L</div>
                <div className="button h-[35px] w-[50%] border-[2px] border-[#ffdab9] bg-[#fffacd] justify-center items-center flex rounded-[20px] m-auto mt-[50px] cursor-pointer font-bold">Log Periods</div>
              </div>
            </div>
            <div className="part2">
              <div className="nav w-full bg-[#ffdab9] h-[25px] flex justify-center font-bold">Log Symptomps</div>
              <div className="symptomps flex ">
              <Symptomps path="plus.svg" />
              <Symptomps path="plus.svg" />

              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Homepage
