// src/components/ChatTest.jsx
import React from 'react';
import FriendChat from './Components/FriendChat';
import UserChat from './Components/UserChat';
import OnlineFriends from './Components/OnlineFriends';



const ChatTest = () => {
    return (
        <div className="container bg-gray-800 text-white min-h-screen">
            {/* ==============Top Section===================== */}
            <div className="px-5 py-5 flex justify-between items-center bg-gray-900 border-b-2 border-gray-700">
                <div className="font-semibold text-2xl">Chat</div>
            </div>

            <div className="flex flex-row justify-between bg-gray-800">
                
                {/*========== People Online in Your Chatting  ================*/}

                <div className="flex flex-col w-2/5 border-r-2 border-gray-700 overflow-y-auto">
                 <OnlineFriends></OnlineFriends>
                 </div> 

                {/* ===========Chat Place=========== */}

                <div className="w-full px-5 flex flex-col justify-between">
                    <div className="flex flex-col mt-5 overflow-y-auto">

                        <FriendChat></FriendChat>

                        <UserChat></UserChat>

                    </div>
                    
                    {/* =========Send Message=============== */}
                    <div className="py-5">
                        <form>
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Say Hello, it's been a while</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                </div>
                                <input class="block w-full p-4 ps-4 text-sm border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Say Hello It's been a while...." required />
                                <div className='flex flex-row'>
                                    <button type="button" class="text-gray-500 absolute end-14 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 mr-12 ">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                    </button>
                                    <button type="button" class="text-gray-500 absolute end-9 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 mr-8">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                    </button>
                                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-pink-700 dark:focus:ring-Pink-800">Send</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default ChatTest;
