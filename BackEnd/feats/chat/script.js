module.exports = ({ io, app }) => {
  const users = {}; // Stores the user info associated with user IDs
  const messages = {}; // In-memory storage for messages
  const offlineMessages = {}; // In-memory storage for offline messages

  const printConnectedUsers = () => {
    console.log('Connected users:', Object.values(users).map(user => ({
      userId: user._id,
      username: user.username,
      socketId: user.socketId
    })));
  };

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Handle new user connection
    socket.on('new-user', (user) => {
      if (!user || !user._id) {
        console.error('Invalid user data received:', user);
        return;
      }

      console.log('New user data received:', user);
      users[user._id] = { ...user, socketId: socket.id };

      // Send any stored offline messages to the user
      if (offlineMessages[user._id]) {
        console.log(`Sending ${offlineMessages[user._id].length} offline messages to user ${user._id}`);
        offlineMessages[user._id].forEach(message => {
          io.to(users[user._id].socketId).emit('chat-message', message);
        });
        delete offlineMessages[user._id]; // Clear offline messages after sending
      }

      console.log('Users after new user connection:', users);
      socket.broadcast.emit('user-connected', user);
      printConnectedUsers(); // Print connected users whenever a new user connects
    });

    // Handle sending chat messages
    socket.on('send-chat-message', (message) => {
      const { friendId, userId } = message;
      console.log('Sending message from:', userId, 'to:', friendId);
      console.log('Current Users:', users);

      // Store the message in the in-memory storage
      if (!messages[friendId]) messages[friendId] = [];
      if (!messages[userId]) messages[userId] = [];

      messages[friendId].push(message);
      messages[userId].push(message);

      console.log('Messages stored:', messages);

      // Ensure both users are connected
      if (users[friendId]) {
        io.to(users[friendId].socketId).emit('chat-message', message);
      } else {
        console.error('User not connected:', friendId);
        // Store the message for the offline user
        if (!offlineMessages[friendId]) offlineMessages[friendId] = [];
        offlineMessages[friendId].push(message);
        console.log(`Stored message for offline user ${friendId}. Total messages stored: ${offlineMessages[friendId].length}`);
      }
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
      let disconnectedUserId = null;
      for (const userId in users) {
        if (users[userId].socketId === socket.id) {
          disconnectedUserId = userId;
          socket.broadcast.emit('user-disconnected', users[userId]);
          delete users[userId];
          break;
        }
      }
      console.log('Client disconnected:', socket.id);
      console.log('Users after disconnection:', users);
      if (disconnectedUserId) {
        console.log('Disconnected user ID:', disconnectedUserId);
      }
      printConnectedUsers(); // Print connected users whenever a user disconnects
    });

    // Handle request to print connected users
    socket.on('print-connected-users', () => {
      printConnectedUsers();
    });
  });

  // HTTP route to get messages for a specific friend
  app.get('/messages/:userId/:friendId', (req, res) => {
    const { userId, friendId } = req.params;
    console.log('Fetching messages for userId:', userId, 'friendId:', friendId);
    const userMessages = messages[userId] || [];
    const friendMessages = messages[friendId] || [];
    const allMessages = [...userMessages, ...friendMessages];
    res.json(allMessages);
  });

  // HTTP route to send a message
  app.post('/send-message', (req, res) => {
    const { message, name, image, friendId, userId } = req.body;
    const newMessage = { message, name, image, friendId, userId };

    if (!messages[friendId]) messages[friendId] = [];
    if (!messages[userId]) messages[userId] = [];

    messages[friendId].push(newMessage);
    messages[userId].push(newMessage);

    res.status(200).send('Message sent');

    // Ensure both users are connected
    if (users[friendId] && users[userId]) {
      io.to(users[friendId].socketId).emit('chat-message', newMessage);
    } else {
      console.error('User not connected:', friendId, userId);
      // Store the message for the offline user
      if (!offlineMessages[friendId]) offlineMessages[friendId] = [];
      offlineMessages[friendId].push(newMessage);
      console.log(`Stored message for offline user ${friendId}. Total messages stored: ${offlineMessages[friendId].length}`);
    }
  });
};
