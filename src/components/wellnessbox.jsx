import React from 'react'

const wellnessbox = (props) => {
  return (
    <>
     <div className='w-[138px] h-[125px]  m-[10px] rounded-[15px] bg-[#fffacd] border border-[black] flex justify-center items-center '>
        <img src={props?.path} alt="" className='w-[75px] h-[75px]' />
        </div> 
        
        
    </>
  )
}

export default wellnessbox
