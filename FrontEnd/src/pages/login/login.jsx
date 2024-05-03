// Login.js
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import Text from "../login/Text.svg";

import logo2 from "../login/login-promotion 1.png";
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import "./loginStyle.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
/*   const [username, setUsername] = useState("");
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

    setError("");

    // You can handle authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
 */

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Data before sending:", data);


    if (!data.email.includes("@") || !data.email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!data.email || !data.password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:8002/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login failed: " + (await response.text()));
      }

      const loginData = await response.json(); // Parse response data
      
      if(loginData){
        document.cookie = `token=${loginData.token}; SameSite=Strict; Secure`;
        console.log("Login successful:", loginData);
        navigate("/home");        
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  //flex-col lg:flex-row items-center
  return (
    <div className="w-full h-full flex items-start ">
      {/* Left Part Form and Login */}
      <div className="w-1/2 h-screen flex flex-col p-20  justify-between bg-[#FAFAFA]">
        <div className="w-full flex flex-col max-w-[550px]:">
          <div className="w-full flex flex-col mb-1">
            <h3 className="text-4xl font-bold mb-4">Login</h3>
            <p className="text-base mb-2">
              Welcome To LearnHub, Start your Journey Now
            </p>
          </div>

          {/* Form Register or Login */}
          <div className="w-full flex flex-col">
            <input
              type="email"
              id="email"
              onChange={handleInputChange}
              placeholder="Email Address *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none"
            />
            <input
              type="Password"
              id="password"
              onChange={handleInputChange}
              placeholder="Password *"
              className="w-full text-black py-2 bg-transparent my-2 border-b border-[#968BC9] outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <Link to="Home">
            <button onClick={handleSubmit} className="w-full bg-[#968BC9] rounded-md  p-4 text-center text-white flex items-center justify-center">
              Login
            </button>
            </Link>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[0.5px] bg-gray-400"></div>
            <p className="absolute bg-[#FAFAFA] text-gray-400 p-2">or</p>
          </div>

          <div class="mt-7 flex flex-row gap-6 my-1 ">

            <GoogleLogin className="w-10"
              onSuccess={credentialResponse => {
                const credentialResponseDecoded = jwt_decode(credentialResponse.credential)
                console.log(credentialResponseDecoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />

            <Link to="/register">
              <button className=" bg-[#c1c1c1] rounded-md  p-2 w-60 text-center text-white flex items-center justify-center">
                Create new Account
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* Right Part Logo and Button */}
      <div className="w-1/2 h-screen flex flex-col p-10 justify-between">
        <img src={Text} alt="" className="mb-3" />
        <img src={logo2} alt="" className="w-97" />
        <Link to="/register">
          <button className="w-full bg-[#968BC9] rounded-md  p-4 text-center font-semibold text-white flex items-center justify-center">
            Join Now For Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

//
