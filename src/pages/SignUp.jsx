import React from 'react';
import {SignUp_left} from '../components/SignUp_left';  
import {Glad_page} from '../components/Glad_page';
import Navbar from '../components/Navbar';

function Signup(){
    return(
     
        <div className='h-[100vh] w-[100vw] '>
        <Navbar/>
        <div className=' pt-[30px] h-[90%] flex  justify-center items-center'>

            <div className='flex  w-[768px] relative'>
                <img src="Mask.png" alt="error" className='sm:absolute left-[36%] top-[-106px] hidden sm:block' />
                <SignUp_left/>
                <Glad_page/>
            </div>
        </div>

 
    </div>
  )
}

export default Signup;