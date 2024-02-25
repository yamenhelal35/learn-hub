// Login.js

import React, { useState } from "react";
import logo from "../images/Logo.png";
import Text from "../images/Text.svg";
import './loginStyle.css'
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
  return (

    <div className="w-full h-full flex flex-col lg:flex-row items-center">
      {/* TopBar Section of Logo and Text */}
      <section className="TopBar">
        <div className="flex items-center justify-between p-4 lg:p-8">
          <img src={logo} alt="Logo" className="w-24" />
          <img src={Text} alt="Text" className="w-3/4 lg:w-auto ml-120" />
        </div>
      </section>
      {/* Left Part: Login Form */}
    
    </div>
  );
};

export default Login;
