import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Landing from './components/landingPage/landing';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
<Dashboard/>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Login />} />
    //     <Route exact path="/register" element={<Register />} />
    //     <Route exact path="/Home" element={<Landing />} />
    //     {/* <Landing></Landing> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
