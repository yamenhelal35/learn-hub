import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';
import SearchBar from '../../components/landingPage/Searchbar/Searchbar';


const CreateCommunity = ({ onSave }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [owner, setOwner] = useState('');
  const [Bio, setBio] = useState('');
  const [CommunityPic, setCommunityPic] = useState('');

  const handleSave = () => {
    // Validate data if needed
    const newCommunity = {
      name,
      details,
      owner,
      Bio,
      CommunityPic
    };
    onSave(newCommunity);
  };

  useEffect(() => {
    console.log('Props received by CreateCommunity:', { onSave });
  }, [onSave]);

  return (

    <div className="flex flex-col bg-purple-100 min-h-screen">
    <Sidebar />
    <div className="absolute top-0 left-0 ml-4 md:ml-72">
      <SearchBar />
    </div>
   
    <main className="flex-grow p-4 md:p-8 ml-0 md:ml-64 flex flex-col items-start">
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communityName">
              Community Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="communityName"
              type="text"
              placeholder="Enter community name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter community description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
              Topic
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="topic"
              type="text"
              placeholder="Enter community topic"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="privacyToggle">
              Privacy
            </label>
            <div className="flex items-center">
              <input
                id="privacyToggle"
                type="checkbox"
                className="mr-2 leading-tight"
              />
              <span className="text-sm">Private</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#968BC9] hover:bg-[#827aa8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create Community
            </button>
          </div>
        </form>
      </div>
    </div>

     








     
     
    </main>
  </div>
  


  );
};

export default CreateCommunity;
{/* <div className="mb-4 w-full">
<label htmlFor="details" className="block text-lg font-medium mb-2">Details</label>
<input
  id="details"
  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
  type="text"
  placeholder="Enter community details"
  value={details}
  onChange={(e) => setDetails(e.target.value)}
/>
</div>
<div className="mb-4 w-full">
<label htmlFor="owner" className="block text-lg font-medium mb-2">Owner</label>
<input
  id="owner"
  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
  type="text"
  placeholder="Enter community owner"
  value={owner}
  onChange={(e) => setOwner(e.target.value)}
/>
</div> */}