import { Router } from 'express';
import { userModel } from '../models/user,model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let users = await userModel.find()
        res.send({ result: "succes", payload: users })

    } catch (error) {
        console.log("No pudo obtener datos en mongo" + error)
    }
})

router.post('/', async (req, res) => {
    let { firt_name, last_name, email } = req.body;
    if (!firt_name || !last_name || !email) return res.send({ status: 'error', error: 'Valores Incompletos' })

    let result = await userModel.create({
        firt_name, last_name, email
    });
    res.send({ status: "success", payload: result })
})

export default router;