
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Glad_page() {
  const navigate = useNavigate(); // Create a navigate function

  const handleSignUpClick = () => {
    navigate("/signin"); // Navigate to the signup route when the button is clicked
  };
  return (
    <div className="w-[384px] h-[455px] bg-gradient-to-br from-pink-500 to-red-500 sm:flex hidden flex-col items-center justify-center text-white ">
      <h1 className="  mb-6 font-[600] text-[35px]">GLAD TO SEE YOU!</h1>
      <p className="Railway mb-10 w-[198px] h-[27px] text-[18px]">Don't have an account?</p>
      <button
        onClick={handleSignUpClick} 
      className="bg-gradient-to-br from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full  border-2 border-solid border-white">
        SIGN IN
      </button>
    </div>
  );
}

export  {Glad_page};