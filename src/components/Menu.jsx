import React from 'react'

const Menu = (props) => {
  return (
    <>
      <div className='flex justify-center items-center w-[14.3%] h-[100%] bg-[#ffdab9] border border-[#fffacd] '>
        <img src={props?.path} alt="" className='w-[45px]' />
      </div>
    </>
  )
}

export default Menu
