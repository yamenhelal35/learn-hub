import React from 'react'
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar'
import { Link } from 'react-router-dom'
import CreateCommunity from './CreateCommunity'
import Footer from '../../components/Footer/Footer'



const NewCommunity = () => {
    return (
        // Commit Testing
        <div className='flex flex-col bg-gray-800 min-h-screen'>
            <Sidebar></Sidebar>

            {/* ========================== Heading Part =========================== */}
            <div className='ml-64 mt-24 px-8'>
                <h2 class="text-4xl font-extrabold dark:text-white">Communites</h2>
                <p class="my-4 text-lg text-gray-500">Easiest way to manage and connect with other collegues who has the same intersts as you.</p>
                <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Join or Create Community and Upload your Matarials and Expand your knowledge with people and share your day to day achivement with your community & Connect with your mentors and Teachers who share their Exclusive Content inside this community.</p>

                <div className='flex flex-row'>


                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border flex flex-row border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <a href="CreateCommunity">Create Community</a>
                    </button>

                    <form class="flex items-center max-w-sm mx-auto ml-96">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" class="border border-gray-300 px-16 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Community ID...." required />
                        </div>
                        <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white  rounded-lg border focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>


                </div>
            </div>

            
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* ========================== Created Part =========================== */}

            <div className='ml-64  px-8' id='YourCommunites'>
                <h2 class="text-3xl font-bold dark:text-white">Your Communites</h2>
                {/* ======================= Community Card ======================== */}
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-200 mt-8">
                    <a href="#">
                        {/* If You Want To ADD Images For EAch Community UnComment this  */}
                        {/* <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/> */}
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Community Name</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Bio Goes Here</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">AnotherBio Goes Here If Not (Make it Names of People inside it or Number of Files).</p>

                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <a href="CommunityPage">Open Community</a>
                        </button>
                        {/* <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open Community</button> */}

                    </div>
                </div>
            </div>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* ========================== Discover Part =========================== */}
            <div className='ml-64  px-8' id='DiscoverCommunites'>
                <div className='flex flex-row'>
                    <h2 class="text-3xl font-bold dark:text-white">Discover Communites</h2>

                    {/* =========Search For Communites */}
                    <form class="flex items-center max-w-sm mx-auto ml-80">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" class="border border-gray-300 px-16 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Community Name...." required />
                        </div>
                        <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white  rounded-lg border focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>

                </div>

                {/* ======================= Community Card ======================== */}
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-200 mt-8">


                    {/* If You Want To ADD Images For EAch Community UnComment this  */}
                    {/* <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/> */}

                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a >Community Name</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Bio Goes Here</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">AnotherBio Goes Here If Not (Make it Names of People inside it or Number of Files).</p>


                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <a href="CommunityPage">Open Community</a>
                        </button>

                    </div>
                </div>

                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-200 mt-8">
                    <a href="#">
                        {/* If You Want To ADD Images For EAch Community UnComment this  */}
                        {/* <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/> */}
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Community Name</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Bio Goes Here</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">AnotherBio Goes Here If Not (Make it Names of People inside it or Number of Files).</p>


                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <a href="CommunityPage">Open Community</a>
                        </button>

                    </div>
                </div>

                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 dark:border-gray-200 mt-8">
                    <a href="#">
                        {/* If You Want To ADD Images For EAch Community UnComment this  */}
                        {/* <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/> */}
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Community Name</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Bio Goes Here</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">AnotherBio Goes Here If Not (Make it Names of People inside it or Number of Files).</p>
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <a href="CommunityPage">Open Community</a>
                        </button>
                        {/* <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open Community</button> */}
                    </div>
                </div>



            </div>


            {/* =================Footer================================= */}
            <div className='mt-8'>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <Footer></Footer>
            </div>




        </div>
    )
}

export default NewCommunity