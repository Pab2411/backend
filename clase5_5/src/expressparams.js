import express from 'express'

const app = express();

const usuarios = [
    { id: "1", nombre: "Fernando", genero: "M" },
    { id: "2", nombre: "Ricardo", genero: "M" },
    { id: "3", nombre: "Maria", genero: "F" },
]

app.get('/', (req, res) => {
    res.send(usuarios)
})

app.get('/:idUsuario', (req, res) => {
    let idUsuarioCapturado = req.params.idUsuario

    let usuariosFiltrados = usuarios.find(u => u.id === idUsuarioCapturado)

    if (!usuariosFiltrados) return res.send({ error: "usuario no encontrado" })

    res.send({ usuariosFiltrados })
})

app.listen(8080, () => console.log("server arriba"))