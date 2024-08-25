import React from 'react'

const Menu = (props) => {
  return (
    <>
      <div className='flex justify-center items-center w-[100%] h-[100%] bg-[#ffdab9] border border-[#fffacd] cursor-pointer '>
        <img src={props?.path} alt="" className='w-[45px] ' />
      </div>
    </>
  )
}

export default Menu
