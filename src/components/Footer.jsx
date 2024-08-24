import React from 'react'
import Menu from './Menu.jsx'

const Footer = () => {
  return (
    <>
    <div className="cont bg-[#ffdab9] w-full h-[60px] border-[1px] border-[#fffacd] flex ">
    <Menu  path="home.svg" />
    <Menu  path="wellness.svg" />
    <Menu  path="book.svg" />
    <Menu  path="community.svg" />
    <Menu  path="maps.svg" />
    <Menu  path="brain.svg" />
    <Menu  path="emergency.svg" />
    </div>
    </>
  )
}

export default Footer
