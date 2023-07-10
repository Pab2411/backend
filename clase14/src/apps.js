import express from 'express';
import userRouter from './routes/user.router.js'
import mongoose from 'mongoose';

const app = express();

const server = app.listen(8080, () => console.log('server arriba'))


const config = {
    mongoDB: {
        URL: "mongodb+srv://pablosivina:pabloG2411@prueba.hni2pod.mongodb.net/?retryWrites=true&w=majority"
    },
};

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(config.mongoDB.URL);
        console.log("Connected to Mongo Atlas");
    } catch (error) {
        console.log("Error en la conexión con Mongo Atlas", error);
    }
};

connectMongoDB();

app.use(express.json())

app.use('/api/users', userRouter);