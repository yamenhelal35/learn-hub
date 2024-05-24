import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Cookies from 'js-cookie';


const NewCommunity = ({ communityData: initialCommunityData = [] }) => {
    const [communityList, setCommunityList] = useState(initialCommunityData);
    const [isLoading, setIsLoading] = useState(true);
    let navigate = useNavigate();
        const createPageRoute = () =>{
            let path = "/CreateCommunity"
            navigate(path, {replace:true})
        };
        const communityPageRoute = (communityId) => {
            console.log("Navigating to community with ID:", communityId);
            let trimmedId = communityId.trim();
            console.log("Trimmed community ID:", trimmedId);
            let path = `/CommunityPage/${trimmedId}`;
            navigate(path, { replace: true });
        };


    const handleSaveCommunity = (newCommunity) => {
        setCommunityList([...communityList, { id: communityList.length + 1, ...newCommunity }]);
    };

    const fetchCommunities = async () => {
        try {
            const token = Cookies.get('token');
            console.log(`token: ${token}`);
            const response = await fetch('http://localhost:8003/community/getallforuser', {
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": token
                    },
                    credentials: 'include'
                });

            if (!response.ok) {
                throw new Error(`Error fetching communities: ${response.statusText}`);
            }
            const data = await response.json();
            
            return data;
        } catch (error) {
            console.error('Error fetching communities:', error);
            return [];
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
        <div className='flex flex-col bg-gray-800 min-h-screen'>
            <Sidebar />

            {/* ========================== Heading Part =========================== */}
            <div className='ml-64 mt-24 px-8'>
                <h2 className="text-4xl font-extrabold dark:text-white">Communities</h2>
                <p className="my-4 text-lg text-gray-500">Easiest way to manage and connect with other colleagues who have the same interests as you.</p>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Join or Create Community and Upload your Materials and Expand your knowledge with people and share your day-to-day achievements with your community & Connect with your mentors and Teachers who share their Exclusive Content inside this community.
                </p>

                <div className='flex flex-row'>
                    <button
                        onClick={createPageRoute}
                        type="button"
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border flex flex-row border-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Create Community
                    </button>

                    <form className="flex items-center max-w-sm mx-auto ml-96">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className="border border-gray-300 px-16 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Community ID...."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="p-2.5 ms-2 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* ========================== Created Part =========================== */}
            <div className='ml-64 px-8' id='YourCommunities'>
                <h2 className="text-3xl font-bold dark:text-white">Your Communities</h2>
                <div className="flex flex-col gap-4 mt-8">
                    {isLoading ? (
                        <p className="text-center">Loading communities...</p>
                    ) : (
                        communityList.length > 0 ? (
                            communityList.map((community) => (
                                <div className="p-5 bg-gray-50 rounded-lg shadow dark:bg-gray-700 dark:border-gray-200" key={community._id}>
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">{community.name}</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">{community.about}</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{community.about}</p>
                                    <button
                                        onClick={() => communityPageRoute(community._id)}
                                        type="button"
                                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Open Community
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No communities found.</p>
                        )
                    )}
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* ========================== Discover Part =========================== */}
            <div className='ml-64 px-8' id='DiscoverCommunities'>
                <div className='flex flex-row'>
                    <h2 className="text-3xl font-bold dark:text-white">Discover Communities</h2>

                    {/* =========Search For Communities */}
                    <form className="flex items-center max-w-sm mx-auto ml-80">
                        <label htmlFor="discover-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="discover-search"
                                className="border border-gray-300 px-16 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Community Name...."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="p-2.5 ms-2 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>

                {/* ======================= Community Card ======================== */}
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-200 mt-8">
                    <a href="#">
                        {/* If You Want To ADD Images For Each Community Uncomment this  */}
                        {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/> */}
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Community Name</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Bio Goes Here</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Another Bio Goes Here If Not (Make it Names of People inside it or Number of Files).</p>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open Community</button>
                    </div>
                </div>

                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-200 mt-8">
                    <a href="#">
                        {/* If You Want To ADD Images For Each Community Uncomment this  */}
                        {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/> */}
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Community Name</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Bio Goes Here</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Another Bio Goes Here If Not (Make it Names of People inside it or Number of Files).</p>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open Community</button>
                    </div>
                </div>

                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-200 mt-8">
                    <a href="#">
                        {/* If You Want To ADD Images For Each Community Uncomment this  */}
                        {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/> */}
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Community Name</a>
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Bio Goes Here</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Another Bio Goes Here If Not (Make it Names of People inside it or Number of Files).</p>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open Community</button>
                    </div>
                </div>
            </div>

            {/* =================Footer================================= */}
            <div className='mt-8'>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <Footer />
            </div>
        </div>
    );
};

export default NewCommunity;
