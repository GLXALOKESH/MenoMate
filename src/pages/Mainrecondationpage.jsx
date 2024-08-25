import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx'
import Symptomps from '../components/symptomps.jsx'
import MenstrualPhaseForm from './recomadation.jsx';
const Mainrecondationpage = () => {
  return (
    <>
      <Navbar menu />
      <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center overflow-hidden"> {/* Added overflow-hidden */}
        <div className="inner-cont max-sm:w-[100%]  w-[50%] h-full bg-white flex flex-col">
          <div className='h-[calc(100%-60px)] w-full'>
         <MenstrualPhaseForm />
         </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Mainrecondationpage;
