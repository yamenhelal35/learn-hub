import React from 'react';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';

const Profile = () => {
    return (
        <div className="flex bg-slate-800">
            <Sidebar />
            <div className="flex-1 bg-gray-800 mt-12 p-8">
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">User Profile</div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                            <p className="text-gray-700">John Doe</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <p className="text-gray-700">john.doe@example.com</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
