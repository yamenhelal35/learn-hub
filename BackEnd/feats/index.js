const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const users = {};

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
    }
});

// Serve static files from the "chat" directory
app.use(express.static(path.join(__dirname, 'chat')));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });

    socket.on('send-chat-message', message => {
        const data = { message: message, name: users[socket.id] };
        socket.broadcast.emit('chat-message', data); // Emit only to other clients
    });

    socket.on('disconnect', () => {
        if (users[socket.id]) {
            socket.broadcast.emit('user-disconnected', users[socket.id]);
            delete users[socket.id];
        }
        console.log('Client disconnected');
    });
});

const PORT = 8004;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
