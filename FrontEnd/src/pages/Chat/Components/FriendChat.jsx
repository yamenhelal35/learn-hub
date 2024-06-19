import React, { useEffect, useState } from 'react';
import nopic from '../../../components/images/404.jpeg'; // Adjust path if necessary
import io from 'socket.io-client';

const socket = io('http://localhost:8004'); // Update with your server's Socket.IO address

const FriendChat = ({ friend, messages, currentUser }) => {
  const [currentMessages, setCurrentMessages] = useState(messages);

  useEffect(() => {
    setCurrentMessages(messages);
    console.log('Initial messages in FriendChat:', messages);
  }, [messages]);

  useEffect(() => {
    const handleNewMessage = (data) => {
      if (!currentUser) {
        return;
      }
  
      console.log('New message received in FriendChat:', data);
      if (data.friendId === currentUser._id || data.userId === friend._id) {
        setCurrentMessages((prevMessages) => {
          const newMessages = [...prevMessages, data];
          const chatKey = `${currentUser._id}_${friend._id}`;
          localStorage.setItem(chatKey, JSON.stringify(newMessages));
          console.log('Updated messages in FriendChat and localStorage for key:', chatKey, newMessages);
          return newMessages;
        });
      }
    };
  
    socket.on('chat-message', handleNewMessage);
  
    return () => {
      socket.off('chat-message', handleNewMessage);
    };
  }, [friend, currentUser]);
  

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col mt-5 overflow-y-auto space-y-4 flex-grow">
        {currentMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.userId === currentUser?._id ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.userId === currentUser?._id
                  ? 'bg-white text-gray-800'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {msg.userId !== currentUser?._id && (
                <div className="flex items-center mb-1">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={msg.image || nopic}
                    alt={`${msg.name}'s profile`}
                  />
                  <strong>{msg.name}</strong>
                </div>
              )}
              <div>{msg.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendChat;
