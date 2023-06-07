import express from 'express'

const app = express();

const server = app.listen(8080, () => console.log("Server arriba"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let frase = "Este es un ejemplo de frase."


// Entrega lo que hay en la constante frase

app.get('/api/frase', (req, res) => {
    res.send({ frase })
})

// Entrga la palabra en la posición dada

app.get('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos

    const parseFrase = parseInt(pos);

    const palabras = frase.split(' ');

    if (parseFrase <= 0 || parseFrase > palabras.length)
        return res.status(400).send({ error: 'Posición inválida' })
    res.send({
        palabra: palabras[parseFrase - 1]
    })
})

// Agrego una palabra al final de la frase 

app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra;

    if (!palabra) {
        return res.status(400).json({ error: 'No se proporciono una palabra' })
    }
    const palabras = frase.split(' ');
    const pos = palabras.length + 1;

    frase += ' ' + palabra;
    res.json({ agregada: palabra, pos: pos });
})

// Modifico una palabra con respecto a la ubicación dada

app.put('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos)
    const palabraNueva = req.body.palabra

    if (!palabraNueva) {
        return res.status(400).json({ error: 'No se proporciona palabra nueva ' })
    }

    const palabras = frase.split(' ');

    if (pos <= 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'Posición incorrecta' })
    }

    const palabraAnterior = palabras[pos - 1];
    palabras[pos - 1] = palabraNueva;
    frase = palabras.join(' ');

    res.json({ actualizada: palabraNueva, anterior: palabraAnterior })

});

app.delete('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos)

    const palabras = frase.split(' ');
    if (pos <= 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'Posición incorrecta' })
    }

    const palabraEliminada = palabras.splice(pos - 1, 1)[0];
    frase = palabras.join(' ')

    res.json({ eliminada: palabraEliminada })

})