module.exports = (io) => {
    const users = {};

    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('new-user', name => {
            users[socket.id] = name;
            socket.broadcast.emit('user-connected', name);
        });

        socket.on('send-chat-message', message => {
            const data = { message: message, name: users[socket.id] };
            socket.broadcast.emit('chat-message', data);
        });

        socket.on('disconnect', () => {
            if (users[socket.id]) {
                socket.broadcast.emit('user-disconnected', users[socket.id]);
                delete users[socket.id];
            }
            console.log('Client disconnected');
        });
    });
};
