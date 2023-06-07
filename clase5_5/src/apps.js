import express from 'express'

const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/rutaQuery', (req, res) => {
    // parametros para query ?

    let consultas = req.query

    let { nombre, apellido } = req.query;

    res.send(consultas)
})


app.listen(8080, () => { console.log("servidor arriba") })



/*
app.get('/saludo', (req, res) => {
    res.send("hola estamos probando express")
})

app.get('/bienvenido', (req, res) => {
    res.send(`<h1 style="color:blue;"> Aqui tenemos una bienvenida <h1>`)
})

app.get('/usuario', (req, res) => {
    res.send({
        nombre: "Andrea",
        apellido: "lopez"
    })
})app.get('/', (req, res) => {
    res.send("esto es una prueba")
})


// parametros 

app.get('/parametros/:nombre', (req, res) => {
    //Cliente
    console.log(req.params.nombre)

    //Servidor
    res.send(`Bienvenido, ${req.params.nombre}`)
})

app.get('/masparametros/:nombre/:apellido', (req, res) => {
    //Cliente
    console.log(req.params.nombre)

    //Servidor
    res.send(`Bienvenido, ${req.params.nombre} ${req.params.apellido}`)
})
*/
