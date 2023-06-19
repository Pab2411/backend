//console.log('estamos trabajando')
const socket = io();
const messagesContainer = document.getElementById('messagesContainer');

// escucho lista completa al conectarme

socket.on('messageList', messages => {
    renderMenssages(messages);
});

//envio mensaje al servidor cuando presiono envio

document.getElementById('sendButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    socket.emit('message', message);
    messageInput.value = '';
});

//muestro elemnetos en el dom

function renderMenssages(message) {
    const messagesContainer = document.getElementById('messagesContainer');
    messagesContainer.innerHTML = '';

    message.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.socketid}: ${msg.mensaje}`;
        messagesContainer.appendChild(messageElement);
    });
}

socket.on('evento_para_socket', data => {


    const messageElement = document.createElement('div');
    messageElement.textContent = `${data.socketid}: ${data.mensaje}`;
    messagesContainer.appendChild(messageElement);
})

