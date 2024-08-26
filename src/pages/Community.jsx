import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer.jsx";
import Post from '../components/Post.jsx';

const Community = () => {
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    };

    return (
        <>
          <Navbar menu />
          <div className="main-cont w-[100vw] h-[calc(100vh-70px)] bg-[#fffacd] flex justify-center overflow-hidden">
            <div className="inner-cont max-sm:w-[100%] w-[50%] h-full bg-white flex flex-col">
              <div className="main w-full flex-grow h-full overflow-y-scroll p-[10px]"> 
                <div className="post-box border h-[150px] w-full"> 
                  <div className="nav w-full h-[25%] border flex items-center px-[10px] justify-between">
                    <p>Write Your Thought here</p> 
                    <button className='bg-cyan-400 h-[90%] px-[7px] rounded-[15px]' onClick={fetch("/")}>POST</button>
                  </div>
                  <div className="write h-[75%] w-[100%]">
                    <textarea 
                      name="postText" 
                      id="postText" 
                      className='w-[100%] h-[100%] bg-[#ffdab9] flex items-start p-[5px] overflow-y-scroll resize-none' 
                      onChange={handleChange} 
                      value={data}
                    />
                  </div>
                </div>
                <Post />
              </div>
              <Footer />
            </div>
          </div>
        </>
    );
};

export default Community;
