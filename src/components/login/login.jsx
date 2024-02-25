// Login.js

import React, { useState } from "react";
import logo from "../images/Logo.png";
import Text from "../images/Text.svg";
import "./loginStyle.css";
// import { Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    // You can perform further validation here

    // Clear any previous error messages
    setError("");

    // You can handle authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // Optionally, you can reset the form fields
    // setUsername('');
    // setPassword('');
  };
  const colors = {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    buttons: "#968BC9",
  };

  //flex-col lg:flex-row items-center
  return (
    <div className="w-full h-full flex items-start ">
      <div className="w-1/2 h-screen flex items-start bg-[#FAFAFA]" >
      <img src={logo} alt="Logo" className="w-52 p-4 lg:p-8" />



      <div className="w-full flex flex-col">
        <h3 className="text-2xl font-semibold mb-4 ">Login</h3>
        <p className="text-sm mb-2">
            Welcome To LearnHub, Start your Journey Now
        </p>
      </div>


      </div>
    </div>
  );
  
};

export default Login;




// {/* First div with fixed position */}
<div className="fixed top-0 left-0 w-full bg-white z-10">
<div className="flex items-center justify-between p-4 lg:p-8">
  <img src={logo} alt="Logo" className="w-24" />
  <img src={Text} alt="Text" className="w-3/4 lg:w-auto ml-120" />
</div>
</div>
