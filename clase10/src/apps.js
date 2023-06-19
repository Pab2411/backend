import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './router/views.router.js'
import { Server } from 'socket.io';

const app = express();
const httpserver = app.listen(8080, () => console.log('server arriba'))

const socketServer = new Server(httpserver)

// Arraay para almacenar los mensajes

const messages = [];

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))
app.use('/', viewRouter);

socketServer.on('connection', socket => {
    console.log('nuevo cliente conectado')

    // enviamos lista de mensajes completa
    socket.emit('messageList', messages);

    socket.on('message', message => {
        console.log(`mensaje recibido del cliente: ${message}`);

        // almaceno mensaje en el servidor

        const msgObj = {
            socketid: socket.id,
            mensaje: message
        };
        messages.push(msgObj);

        //envio mensaje a todos los clientes 

        socketServer.emit('evento_para_socket', msgObj)
    });
});

/*
socketServer.on // escuchar y recibir
socketServer.emit //hablar  envio informacion
*/






