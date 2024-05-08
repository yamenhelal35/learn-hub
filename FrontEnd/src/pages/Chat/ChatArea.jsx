// ChatArea.js

import React from 'react';

const ChatArea = () => {
  return (
    <div className="w-3/4 p-4">
      <div className="flex flex-col h-full">
        {/* Chat messages */}
        <div className="flex flex-col flex-grow overflow-y-auto">
         
          <div className="flex items-start mb-4">
            <img src="avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
            <div className="bg-gray-200 p-3 rounded-lg ml-2">
              <p>Hello, how are you?</p>
            </div>
          </div>
          <div className="flex items-end justify-end mb-4">
            <div className="bg-blue-500 p-3 rounded-lg mr-2">
              <p>Hi! I'm doing great, thanks for asking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
