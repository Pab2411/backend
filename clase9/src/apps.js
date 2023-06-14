import express from 'express';
import handlebars from 'express-handlebars'
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + 'public'))

console.log(__dirname)
/*
app.get('/', (req, res) => {
    let usuario = {
        name: "Pablo"
    }
    res.render('index', usuario)
})
*/
const users = [
    {
        nombre: "Usuario1",
        apellido: "Apellido1",
        edad: 25,
        correo: "usuario1@example.com",
        telefono: 123456789
    },
]

let food = [
    { name: "PERA", PRICE: "100" }

]

app.get('/', (req, res) => {
    let usuario = {
        name: "veronnica",
        rol: "admin"
    }
    res.render('index', {
        user: usuario,
        isAdmin: usuario.rol === 'admin', food
    })
})



app.get('/', (req, res) => {
    // Generar un número aleatorio para elegir un usuario al azar
    const randomIndex = Math.floor(Math.random() * users.length);
    //const randomUser = users[randomIndex];

    res.render('index', users[randomIndex])
})

const server = app.listen(8080, () => console.log('server arriba'))