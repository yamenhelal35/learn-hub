import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Landing from './components/landingPage/landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Community from './pages/Communities/Community';
import CreateCommunity from './pages/Communities/CreateCommunity';
import Package from './pages/packagePage/package';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import Chat from './pages/Chat/Chat';





function App() {
  const [communityData, setCommunityData] = useState([
    { id: 1, name: 'Community 1', details: 'Details for Community 1' },
    { id: 2, name: 'Community 2', details: 'Details for Community 2' },
    { id: 3, name: 'Community 3', details: 'Details for Community 3' },
    { id: 4, name: 'Community 4', details: 'Details for Community 4' },
    { id: 5, name: 'Community 5', details: 'Details for Community 5' },
  ]);

  const handleSaveCommunity = (newCommunity) => {
    setCommunityData([...communityData, { id: communityData.length + 1, ...newCommunity }]);
    // Optionally, you can navigate back to the community page after saving
  };
  return (

    // <Community></Community>

    //<Dashboard/> 
    <Router>
      <Routes>

        <Route exact path="/Community" element={<Community communityData={communityData} />} />
        <Route exact path="/CreateCommunity" element={<CreateCommunity onSave={handleSaveCommunity} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Inbox" element={<Chat />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Packages" element={<Package />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Home" element={<Landing />} />
        <Route exact path="/EditProfile" element={<EditProfile />} />
        {/* <Landing></Landing> */}
      </Routes>
    </Router>
  );
}

export default App;
