import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <>
    <Navbar />
      <div className="main w-[100vw] h-[100vh]">
        <div className="textbox">
            <h1>MENO MATE</h1>
            <button>lets start</button>
        </div>
      </div>
    </>
  )
}

export default Landing
