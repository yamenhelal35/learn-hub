import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Landing from './components/landingPage/landing';
function App() {
  return (
<Landing></Landing>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Login />} />
    //     <Route exact path="/register" element={<Register />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
