import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate


function SignIn_left() {
  // State variables to store form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const negavite = useNavigate(); // Create a navigate function 


  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Define the payload for the backend request
    const payload = { email, password };

    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:3000/api/user/login-User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Handle the response from the backend
      if (response.ok) {
        // Handle successful signin, maybe redirect or show success message
        alert("Sign in successful!");
        negavite("/home"); // Navigate to the signin route when the button is clicked
      } else {
        // Handle errors returned by the backend
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="h-full w-full md:h-[455px] md:w-[384px] bg-[#FFFFFF] flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit} // Add form submit handler
          className="h-[364px] w-[307.2px] bg-[#FFFFFF] flex flex-col gap-y-[40px] px-[10px]"
        >
          <div className="h-[35px] w-[84px]">
            <p className="poppins text-[23px] font-[600]">Sign In</p>
          </div>

          <div className="w-[245.76px] h-[51px]">
            <label className="Raleway text-[16px] font-[500] w-[42px] h-[24px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email} // Bind input value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-[245.76px] h-[30px] bg-[#FFDAB9] focus:outline-none px-2 rounded-md"
              placeholder="Email"
              required // Add required attribute for validation
            />
          </div>

          <div className="w-[245.76px] h-[52px]">
            <label className="Raleway text-[16px] font-[500] w-[73px] h-[24px]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password} // Bind input value to state
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
              className="w-[245.76px] h-[30px] bg-[#FFDAB9] focus:outline-none px-2 rounded-md"
              placeholder="Password"
              required // Add required attribute for validation
            />
          </div>

          <div className="mx-auto">
            <button
              type="submit" // Change button type to submit
              className="w-[245.76px] h-[35px] bg-[#ff5151] rounded-full"
            >
              <span className="h-[27px] w-[67px] Raleway text-[18px] font-[700] text-white">
                SIGN IN
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export { SignIn_left };
