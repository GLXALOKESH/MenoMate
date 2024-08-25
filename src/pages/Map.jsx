import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer.jsx";
import MapComponent from '../components/LeafletMap.jsx';

const Map = () => {
  return (
    <>
      <Navbar menu />
      <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center overflow-hidden"> {/* Added overflow-hidden */}
        <div className="inner-cont max-sm:w-[100%]  w-[50%] h-full bg-white flex flex-col">
          <div className="main w-full flex-grow h-full"> 
            <MapComponent />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Map;
