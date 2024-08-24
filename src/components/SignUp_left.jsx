
import React from "react";
function SignUp_left() {
  return (
    <>
            <div className=" h-full w-full md:h-[455px] md:w-[384px]  bg-[#FFFFFF]  flex flex-col justify-center items-center " >
                <div className="h-[404px] w-[307.2px]  bg-[#FFFFFF] flex flex-col gap-y-[35px] px-[10px]">
                    <div className="h-[35px] w-[91px] ">
                        <p className="poppins text-[23px] font-[600]">SIGN UP</p>
                    </div>

                    <div className="w-[245.76px] h-[51px]  ">
                        <label className="Raleway text-[16px] font-[500] w-[42px] h-[24px]" >
                            Email
                        </label>

                        <input type="email" name="email" id="email" className="w-[245.76px] h-[30px] bg-[#FFDAB9] focus:outline-none px-2 rounded-md" placeholder="Email" />
                    </div>
                    <div className="w-[245.76px] h-[52px]  ">
                        <label className="Raleway text-[16px] font-[500] w-[73px] h-[24px]">
                            Password
                        </label>
                        {/**
                         * <input type="password" name="password" id="password" className="w-[245.76px] h-[26px] bg-[#FFDAB9]" placeholder="password" />
                         * 
                         */}
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-[245.76px] h-[30px] bg-[#FFDAB9] focus:outline-none px-2 rounded-md"
                            placeholder="Password"
                        />


                    </div>

                    <div className="w-[245.76px] h-[52px]  ">
                        <label className="Raleway text-[16px] font-[500] w-[73px] h-[24px]">
                            Re-Password
                        </label>
                        
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-[245.76px] h-[30px] bg-[#FFDAB9] focus:outline-none px-2 rounded-md"
                            placeholder="Password"
                        />

<p className="md:hidden Source sans Pro text-[12px] font-normal">You have an account ?</p>

                    </div>
                  

                    <div className="  mx-auto">
                        <button className="w-[245.76px] h-[35px] bg-[#ff5151] rounded-full ">
                            <span className="h-[27px] w-[67px] Raleway text-[18px] font-[700] text-white">
                                SIGN IN
                            </span>

                        </button>


                    </div>
                </div>


            </div>
        </>
  );
}

export { SignUp_left };