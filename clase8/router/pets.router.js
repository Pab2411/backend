import { Router } from "express";

const router = Router();
const pets = [];

router.get('/', (req, res) => {
    res.send({ pets })
})

router.post('/', (req, res) => {

    const user = req.body;
    pets.push(user)
    res.send({ status: 'ok' })
})

export default router;