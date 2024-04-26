import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';
import SearchBar from "../../components/landingPage/Searchbar/Searchbar";
import CreateCommunity from './CreateCommunity';

const Community = () => {
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
        <div className="flex flex-col bg-[#F4F0FF]">
            <Sidebar />

            <main className='flex-grow p-8 ml-64 flex flex-col justify-center items-center'>
                {/* SearchBar */}
                <div className="absolute top-0 left-0 ml-72">
                    <SearchBar />
                </div>
                {/* User Button */}
                <div className="absolute top-0 right-0 p-4 flex space-x-4">

                    <Link to="/CreateCommunity" className="bg-[#968BC9] hover:bg-[#605d70] text-white py-1 px-8 rounded-sm font-semibold">Create Community</Link>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 fill-[#8a8a8a]">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

            </main>


            {/* Communites Section */}
            <h1 className='ml-72 mt-8 font-bold text-4xl text-[#8A8A8A]' >Communities</h1>
            {/* Communites Section */}
            <div className=" flex-grow p-8 ml-64 grid grid-cols-3 gap-8 justify-center items-center">
                {communityData.map((community) => (
                    <div
                        key={community.id}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
                        style={{ minWidth: '250px', maxWidth: '300px' }}
                    >
                        <h2 className="text-lg font-semibold mb-2">{community.name}</h2>
                        <p className="text-gray-600 mb-4">{community.details}</p>
                        <div className="flex justify-between">
                            <button className="bg-[#968BC9] hover:bg-[#605d70] text-white py-2 px-4 rounded-sm mr-2">
                                Join
                            </button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-sm">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Community;
