import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Symptomps from '../components/symptomps.jsx';

const Homepage = () => {
  const [cycleData, setCycleData] = useState({
    lastPeriodDate: '2024-02-01',
    cycleLength: 28,
    periodDuration: 5,
  });
  
  const [daysLeft, setDaysLeft] = useState({ period: 0, ovulation: 0, fertile: 0 });

  useEffect(() => {
    calculateCycleDays();
  }, [cycleData]);

  const calculateCycleDays = () => {
    const today = new Date();
    const lastPeriod = new Date(cycleData.lastPeriodDate);
    const dayDifference = Math.floor((today - lastPeriod) / (1000 * 60 * 60 * 24));

    const periodDaysLeft = cycleData.periodDuration - dayDifference;
    const ovulationDay = cycleData.cycleLength - 14;
    const fertileStartDay = ovulationDay - 5;

    setDaysLeft({
      period: periodDaysLeft,
      ovulation: ovulationDay - dayDifference,
      fertile: fertileStartDay - dayDifference,
    });
  };

  return (
    <>
      <Navbar menu />
      <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center overflow-hidden">
        <div className="inner-cont max-sm:w-[100%]  w-[50%] h-full bg-white flex flex-col">
          {/* Dates */}
          <div className="days h-[50px] w-[100%] bg-[#ffdab9] flex ">
            {/* Loop through current week dates */}
          </div>

          {/* Main Counters */}
          <div className="main w-full flex-grow">
            <div className="part1 w-full h-[50%] flex border-[#fffacd] border-[2px]">
              <div className="counter h-full w-[50%] p-[5px]">
                <div className="circle bg-[#ffdab9] h-full aspect-square rounded-full justify-center items-center">
                  <div className="texts h-full flex flex-col justify-center items-center">
                    <p className="text-[25px]">Periods</p>
                    <p className="text-[70px] font-bold">{daysLeft.period > 0 ? daysLeft.period : 0}</p>
                    <p className="text-[30px]">days</p>
                    <p className="text-[20px]">left</p>
                  </div>
                </div>
              </div>
              <div className="text p-3">
                <div className="result mt-[30px]">Your symptoms say your period is going to end soon</div>
                <div className="water mt-[20px]">Water consumed: 2L</div>
                <div className="button h-[35px] w-[50%] border-[2px] border-[#ffdab9] bg-[#fffacd] justify-center items-center flex rounded-[20px] m-auto mt-[50px] cursor-pointer font-bold">
                  Log Periods
                </div>
              </div>
            </div>

            {/* Log Symptoms */}
            <div className="part2">
              <div className="nav w-full bg-[#ffdab9] h-[25px] flex justify-center font-bold">Log Symptoms</div>
              <div className="symptoms flex">
                <Symptomps path="plus.svg" />
                <Symptomps path="plus.svg" />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
