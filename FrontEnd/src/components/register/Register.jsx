// Register 
//imports 
import React, { useState } from "react";
import logo from "../images/Logo.png";
import Text from "../images/Text.svg";
import logo2 from "../images/login-promotion 1.png";
import github from "../images/github-svgrepo-com.svg"
import { Link } from 'react-router-dom';
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
            <h3 className="text-4xl font-bold mb-4">Register To LearnHub</h3>
            <p className="text-base mb-2">
              Welcome To LearnHub, Start your Journey Now</p>
          </div>

          {/* Form Register or Login */}
          <div className="w-full flex flex-col">
            <input type="Name"
              placeholder="Name *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none" />
               <input type="email"
              placeholder="Email Address *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none" />
            <input type="Password"
              placeholder="Password *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none" />
            <input type="Password"
              placeholder="Re Enter Password *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none" />
          </div>
          <div className="w-full flex flex-col my-4">
            <button className="w-full bg-[#968BC9] rounded-md  p-4 text-center text-white flex items-center justify-center">
              Create Account
            </button>
          </div>

         

        
        </div>
      </div>

      {/* Right Part Logo and Button */}
      <div className="w-1/2 h-screen flex flex-col p-10 justify-between">
        <img src={Text} alt="" className="mb-3" />
        <img src={logo2} alt="" className="w-97"/>
        <Link to="/">
        <button className="w-full bg-[#968BC9] rounded-md  p-4 text-center font-semibold text-white flex items-center justify-center">
            Login to Existing Account
            </button>
      </Link>
      </div>
    </div>
  );

};

export default Register;
