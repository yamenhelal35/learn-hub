import React from 'react'

const OnlineFriends = () => {
    return (
        <div>
            {/* Search For USers (Can Be Deleted if wanted) */}
            <div className="border-b-2 border-gray-700 py-4 px-2">
                <input
                    type="text"
                    placeholder="Search chats"
                    className="py-2 px-2 border-1 border-gray-600 rounded-sm w-full bg-gray-700 text-white"
                />
            </div>

            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-700">
                <div className="w-1/4 relative">
                    <img
                        src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                        className="object-cover h-10 w-10 rounded-full"
                        alt=""
                    />
                
                </div>
                <div className="w-full">
                    
                    <div className="text-lg font-semibold">People Name </div>
                    <span className="text-gray-400">Message Goes Here</span>
                    
                </div>
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-500"></span> 
            </div>

        </div>
    )
}

export default OnlineFriends