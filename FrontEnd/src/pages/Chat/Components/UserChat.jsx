import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8004'); // Update with your server's Socket.IO address

const UserChat = ({ friend, currentUser, setMessages }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      userId: currentUser._id,
      name: currentUser.username,
      image: currentUser.profilepic,
      message,
      friendId: friend._id,
      timestamp: Date.now(), // Add a timestamp to help with message uniqueness
    };

    console.log('Sending message:', newMessage);
    socket.emit('send-chat-message', newMessage);

    setMessages((prevMessages) => {
      console.log('Previous messages:', prevMessages);
      const updatedMessages = { ...prevMessages };
      const friendId = newMessage.friendId === currentUser._id ? newMessage.userId : newMessage.friendId;
      if (Array.isArray(updatedMessages[friendId])) {
        updatedMessages[friendId] = [...updatedMessages[friendId], newMessage];
      } else {
        updatedMessages[friendId] = [newMessage];
      }
      const chatKey = `${currentUser._id}_${friend._id}`;
      localStorage.setItem(chatKey, JSON.stringify(updatedMessages[friendId]));
      console.log('Updated messages state and localStorage:', updatedMessages);
      return updatedMessages;
    });

    setMessage('');
  };

  return (
    <div className="py-5">
      <form onSubmit={handleSendMessage}>
        <label
          htmlFor="message"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Say Hello, it's been a while
        </label>
        <div className="relative">
          <input
            id="message"
            name="message"
            className="block w-full p-4 ps-4 text-sm border border-gray-300 rounded-lg bg-gray-50 text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Say Hello It's been a while...."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserChat;
