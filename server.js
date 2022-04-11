import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import router from "./router/router.js";
import { PORT, MONGO_URI } from "./config/config.js";

const app = express()
app.enable('trust proxy');
app.use(cors())
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use('/api', router);

async function run() {

    await mongoose.connect(MONGO_URI)
        .then((res) => {
            console.log('Connected to database');
        }).catch(err => {
            console.log('error occured', err);
        })

    app.listen(PORT, () => {
        console.log(`Server is running http://localhost:${PORT}`);
    })
}

run();