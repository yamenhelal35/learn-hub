const socket = io('http://localhost:8004');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

let name = '';

fetch('/username')
    .then(response => response.json())
    .then(data => {
        name = data.name;
        appendMessage('You joined');
        socket.emit('new-user', name);
    });

// Listen for chat messages from the server
socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
});

// Listen for user connection events
socket.on('user-connected', name => {
    appendMessage(`${name} connected`);
});

// Listen for user disconnection events
socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`);
});

// Handle message form submission
messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    if (message.trim()) { // Ensure message is not empty
        appendMessage(`You: ${message}`);  // Show the message immediately in sender's window as "You"
        socket.emit('send-chat-message', message);
        messageInput.value = ''; // Clear the input
    }
});

// Function to append messages to the message container
function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageContainer.append(messageElement);
}
