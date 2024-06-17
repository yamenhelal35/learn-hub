import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import OnlineFriends from './Components/OnlineFriends'; // Adjust path if necessary
import FriendChat from './Components/FriendChat'; // Adjust path if necessary
import UserChat from './Components/UserChat'; // Adjust path if necessary

const ChatTest = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const prevSelectedFriend = useRef(null);
  const socketRef = useRef(null);

  const initializeSocket = () => {
    socketRef.current = io('http://localhost:8004'); // Update with your server's Socket.IO address
    socketRef.current.on('connect', () => {
      console.log('Socket connected');
      if (currentUser) {
        socketRef.current.emit('new-user', currentUser);
      }
    });
  };

  useEffect(() => {
    const fetchCurrentUser = () => {
      try {
        const user = localStorage.getItem('currentUser');
        if (user) {
          const parsedUser = JSON.parse(user);
          setCurrentUser(parsedUser);
          console.log('Fetched current user:', parsedUser);
          initializeSocket();
        } else {
          console.error('No current user found in localStorage');
        }
      } catch (error) {
        console.error('Failed to fetch current user:', error);
      }
    };

    fetchCurrentUser();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        console.log('Socket disconnected');
      }
    };
  }, []);

  useEffect(() => {
    if (selectedFriend && currentUser && selectedFriend !== prevSelectedFriend.current) {
      console.log('Selected friend changed:', selectedFriend);
      prevSelectedFriend.current = selectedFriend;
      loadMessages(currentUser._id, selectedFriend._id);
    }
  }, [selectedFriend, currentUser]);

  const loadMessages = (userId, friendId) => {
    setLoading(true);
    const chatKey = `${userId}_${friendId}`;
    const reversedChatKey = `${friendId}_${userId}`;
    const storedMessages =
      JSON.parse(localStorage.getItem(chatKey)) || JSON.parse(localStorage.getItem(reversedChatKey)) || [];
    setMessages((prevMessages) => ({
      ...prevMessages,
      [friendId]: storedMessages,
    }));
    setLoading(false);
  };

  useEffect(() => {
    const handleIncomingMessage = (newMessage) => {
      console.log('Incoming message:', newMessage);
      const chatKey = `${newMessage.userId}_${newMessage.friendId}`;
      const reversedChatKey = `${newMessage.friendId}_${newMessage.userId}`;

      // Store the message for both sender and receiver in localStorage
      const storeMessage = (key) => {
        const storedMessages = JSON.parse(localStorage.getItem(key) || '[]');
        const newChatHistory = [...storedMessages, newMessage];
        localStorage.setItem(key, JSON.stringify(newChatHistory));
        console.log('Updated chat history in localStorage for key:', key, newChatHistory);
      };

      storeMessage(chatKey);
      storeMessage(reversedChatKey);

      // Update state if the chat is currently active
      setMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        const friendId = newMessage.friendId === currentUser._id ? newMessage.userId : newMessage.friendId;
        if (updatedMessages[friendId]) {
          updatedMessages[friendId] = [...updatedMessages[friendId], newMessage];
        } else {
          updatedMessages[friendId] = [newMessage];
        }
        return updatedMessages;
      });
    };

    if (socketRef.current) {
      socketRef.current.on('chat-message', handleIncomingMessage);
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.off('chat-message', handleIncomingMessage);
      }
    };
  }, [selectedFriend, currentUser]);

  const handleSelectFriend = (friend) => {
    console.log('Friend selected:', friend);
    if (selectedFriend?._id !== friend._id) {
      setSelectedFriend(friend);
    }
  };

  return (
    <div className="container bg-gray-800 text-white min-h-screen">
      <div className="px-5 py-5 flex justify-between items-center bg-gray-900 border-b-2 border-gray-700">
        <div className="font-semibold text-2xl">Chat</div>
      </div>

      <div className="flex flex-row justify-between bg-gray-800">
        <div className="flex flex-col w-2/5 border-r-2 border-gray-700 overflow-y-auto">
          <OnlineFriends
            onSelectFriend={handleSelectFriend}
            messages={messages}
            currentUser={currentUser}
          />
        </div>

        <div className="w-full px-5 flex flex-col justify-between">
          {selectedFriend ? (
            <>
              {loading ? (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <p>Loading...</p>
                </div>
              ) : (
                <>
                  <FriendChat
                    friend={selectedFriend}
                    messages={messages[selectedFriend._id] || []}
                    currentUser={currentUser}
                  />
                  <UserChat friend={selectedFriend} currentUser={currentUser} setMessages={setMessages} />
                </>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>Select a friend to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatTest;
