import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer.jsx";

const Community = () => {
    return (
        <>
          <Navbar menu />
          <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center overflow-hidden"> {/* Added overflow-hidden */}
            <div className="inner-cont max-sm:w-[100%]  w-[50%] h-full bg-white flex flex-col">
              <div className="main w-full flex-grow h-full overflow-y-scroll p-[10px]"> 
                <div className="post-box border h-[150px] w-full ">
                <div className="nav w-full h-[25%] border flex items-center px-[10px] justify-between">
                    <p>Write Your Thought here </p> <button className=' bg-cyan-400 h-[90%] px-[7px] rounded-[15px]'>POST</button>
                </div>
                </div>

              </div>
              <Footer />
            </div>
          </div>
        </>
      );
}

export default Community
