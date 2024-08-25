import React from 'react'
import Menu from './Menu.jsx'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="cont bg-[#ffdab9] w-full h-[60px] border-[1px] border-[#fffacd] flex ">
    <NavLink className="h-full w-[14.3%]" to="/home"> <Menu  path="home.svg"  /> </NavLink>
    <NavLink className="h-full w-[14.3%]" to="/wellness"> <Menu  path="wellness.svg" /> </NavLink>
    <NavLink className="h-full w-[14.3%]" to="/book"> <Menu  path="book.svg" /> </NavLink>
    <NavLink className="h-full w-[14.3%]" to="/community"> <Menu  path="community.svg" /> </NavLink>
    <NavLink className="h-full w-[14.3%]" to="/maps"> <Menu  path="maps.svg" /> </NavLink>
    <NavLink className="h-full w-[14.3%]" to="/brain">  <Menu  path="brain.svg" /> </NavLink>
    <NavLink className="h-full w-[14.3%]" to="/emergency"> <Menu  path="emergency.svg" /> </NavLink>
    </div>
    </>
  )
}

export default Footer
