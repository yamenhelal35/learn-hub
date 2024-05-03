import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';
import SearchBar from "../../components/landingPage/Searchbar/Searchbar";
import CreateCommunity from './CreateCommunity';

const Community = ({ communityData: initialCommunityData }) => {
    const [communityList, setCommunityList] = useState(initialCommunityData);
    const [isLoading, setIsLoading] = useState(true);




    const handleSaveCommunity = (newCommunity) => {
        setCommunityList([...communityList, { id: communityList.length + 1, ...newCommunity }]);
        // Optionally, you can navigate back to the community page after saving
    };

    
    const fetchCommunities = async () => {
        try {
          const token = Cookies.get('token');

          console.log(`token: ${token}`)
          const response = await fetch('http://localhost:8003/community/getallforuser',{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
          });

          //Khlaed is GOAT
          if (!response.ok) {
            throw new Error(`Error fetching communities: ${response.statusText}`);
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching communities:', error);
          return []; // Or handle the error differently, like showing an error message
        }
      };
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const communities = await fetchCommunities();
            setCommunityList(communities.communities);
            console.log('communities:', communities);
            
            setIsLoading(false);
          } catch (error) {
            console.error('Error loading communities:', error);
            setIsLoading(false);
          }
        };
      
        fetchData();
      }, []);
    
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
                    <Link to="/CreateCommunity"  className="bg-[#968BC9] hover:bg-[#605d70] text-white py-1 px-8 rounded-sm font-semibold">Create Community</Link>
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
            {isLoading ? (
                <p className="text-center">Loading communities...</p>
            ):(
                
            communityList.length > 0 ? (
                
                <div className=" flex-grow p-8 ml-64 grid grid-cols-3 gap-8 justify-center items-center">
                    {Object.values(communityList).map((community) => (
                        <div
                            key={community._id}
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
                            style={{ minWidth: '250px', maxWidth: '300px' }}
                        >
                            <h2 className="text-lg font-semibold mb-2">{community.communityName}</h2>
                            <p className="text-gray-600 mb-4">{community.details}</p>
                            <div className="flex justify-between">
             {/* ===================================== Really Important ================================ */}
                                <p>//Place The Topic Here Ya Kahled</p>
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
            ) : (
                <p className="text-center">No communities found.</p>
            )
    )}
        </div>

    )
}

export default Community;
