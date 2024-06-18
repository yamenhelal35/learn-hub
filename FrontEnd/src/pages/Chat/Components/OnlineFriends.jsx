import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import nopic from '../../../components/images/404.jpeg'; // Updated path for the image

const OnlineFriends = ({ onSelectFriend, messages, currentUser }) => {
  const [friends, setFriends] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch('http://localhost:8002/auth/getFriendList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch friends list');
        }
        const data = await response.json();
        setFriends(data);
        console.log('Fetched friends:', data);
      } catch (error) {
        console.error('Error fetching friends list:', error);
      }
    };
    fetchFriends();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFriends = friends.filter((friend) =>
    friend.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLastMessage = (friendId) => {
    const friendMessages = messages[friendId] || [];
    if (friendMessages.length > 0) {
      return friendMessages[friendMessages.length - 1].message;
    }
    return 'No recent messages';
  };

  const handleSelectFriend = (friend) => {
    console.log('Friend selected in OnlineFriends:', friend);
    onSelectFriend(friend);
  };

  return (
    <div>
      {/* Search For Users */}
      <div className="border-b-2 border-gray-700 py-4 px-2">
        <input
          type="text"
          placeholder="Search chats"
          className="py-2 px-2 border-1 border-gray-600 rounded-sm w-full bg-gray-700 text-white"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredFriends.map((friend) => (
        <div
          key={friend._id}
          className="flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-700 cursor-pointer"
          onClick={() => handleSelectFriend(friend)}
        >
          <div className="w-1/4 relative">
            <img
              src={friend.profilepic || nopic}
              className="object-cover h-10 w-10 rounded-full"
              alt={friend.username}
            />
          </div>
          <div className="w-full">
            <div className="text-lg font-semibold">{friend.username}</div>
            <span className="text-gray-400">{getLastMessage(friend._id)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineFriends;
