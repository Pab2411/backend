import express from 'express'

const router = express.Router();

let food = [
    { name: "PERA", price: "100" },
    { name: "MANGO", price: "100" },
    { name: "MANZANA", price: "100" }

]

router.get('/', (req, res) => {
    let usuario = {
        name: "veronnica",
        rol: "admin"
    }
    res.render('index', {
        style: 'index.css',
        user: usuario,

        isAdmin: usuario.rol === 'admin', food
    })
})

export default router;