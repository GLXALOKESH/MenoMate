import React from 'react';  
import {SignIn_left } from '../components/SignIn_left';
import {WelcomeBack} from '../components/WelcomeBack';
import Navbar from '../components/Navbar';
function SignIn() {
    return (
        <div className='h-[100vh] w-[100vw] '>
            <Navbar/>
            <div className=' pt-[30px] h-[90%] flex  justify-center items-center'>

                <div className='flex  w-[768px] relative'>
                    <img src="Mask.png" alt="error" className='sm:absolute left-[36%] top-[-106px] hidden sm:block' />
                    <SignIn_left/>
                    <WelcomeBack/>
                </div>
            </div>
    
     
        </div>
    );
    
}

export default SignIn;