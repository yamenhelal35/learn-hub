// Register 
//imports 
import React, { useState } from "react";
import logo from "../images/Logo.png";
import Text from "../images/Text.svg";
import logo2 from "../images/login-promotion 1.png";
import github from "../images/github-svgrepo-com.svg"
// consts 
const Register = () => {
const colors = {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    buttons: "#968BC9",
  };

  return (
    <div className="w-full h-full flex items-start ">
      {/* Left Part Form and Login */}
      <div className="w-1/2 h-screen flex flex-col p-10  justify-between bg-[#FAFAFA]" >

        <div className="w-full flex flex-col max-w-[550px]:">
          <div className="w-full flex flex-col mb-1">
            <h3 className="text-4xl font-bold mb-4">Register</h3>
            <p className="text-base mb-2">
              Welcome To LearnHub, Start your Journey Now</p>
          </div>

          {/* Form Register or Login */}
          <div className="w-full flex flex-col">
            <input type="email"
              placeholder="Email Address *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none" />
            <input type="Password"
              placeholder="Password *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none" />
          </div>
          <div className="w-full flex flex-col my-4">
            <button className="w-full bg-[#968BC9] rounded-md  p-4 text-center text-white flex items-center justify-center">
              Login
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[0.5px] bg-gray-400"></div>
            <p className="absolute bg-[#FAFAFA] text-gray-400 p-2">or</p>
          </div>

          <div class="mt-7 flex flex-col gap-2 my-1">

            <button
              class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-black p-2 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-[#968BC9] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                src={github} alt="GitHub"
                class="h-[18px] w-[18px] fill-slate-50 " />
              Continue with GitHub
            </button>

            <button
              class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#968BC9] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                class="h-[18px] w-[18px] " />Continue with
              Google
            </button>


            <button
              class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#968BC9] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Google"
                class="h-[18px] w-[18px] " />Continue with
              LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* Right Part Logo and Button */}
      <div className="w-1/2 h-screen flex flex-col p-10 justify-between">
        <img src={Text} alt="" className="mb-3" />
        <img src={logo2} alt="" className="w-97"/>
        <button className="w-full bg-[#968BC9] rounded-md  p-4 text-center font-semibold text-white flex items-center justify-center">
            Join Now For Free
            </button>
      </div>
    </div>
  );

};

export default Register;
