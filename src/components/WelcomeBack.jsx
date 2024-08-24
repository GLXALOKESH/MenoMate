import React from 'react';

function WelcomeBack() {
  return (
    <div className="w-[384px] h-[455px] bg-gradient-to-br from-pink-500 to-red-500 flex flex-col items-center justify-center text-white ">
      <h1 className="  mb-6 font-[600] text-[35px]">WELCOME BACK!</h1>
      <p className="Railway mb-10 w-[198px] h-[27px] text-[18px]">Don't have an account?</p>
      <button className="bg-gradient-to-br from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full  border-2 border-solid border-white">
        SIGN UP
      </button>
    </div>
  );
}

export { WelcomeBack};