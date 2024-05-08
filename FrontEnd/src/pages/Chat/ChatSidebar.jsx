
import React from 'react';

const ChatSidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Contacts</h2>
      <div className="flex flex-col space-y-2">
        {/* Replace the below div with dynamic contact list */}
        <div className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <img src="avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSidebar;
