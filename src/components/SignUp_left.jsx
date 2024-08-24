import React from "react";
function SignUp_left() {
  return (
    <div >
     <h1>Sign Up</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
      
    </div>
  );
}

export  {SignUp_left};