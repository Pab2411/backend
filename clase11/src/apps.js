import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewRouter from './router/views.router.js'
import { Server } from 'socket.io';

const app = express();
const httpserver = app.listen(8080, () => console.log('server arriba'))

const io = new Server(httpserver)



app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))
app.use('/', viewRouter);

let messages = [];


io.on('connection', socket => {
    console.log('nuevo cliente conectado')

    socket.on('message', data => {
        messages.push(data)
        io.emit('messageLogs', messages)
        console.log(data)
    })
})