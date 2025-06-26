// require('dotenv').config({path: './env'})

// "dev" : "nodemon -r dotenv/config --experimental-json-modules  src/index.js"

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})
connectDB()

// in db file we use async so we receive promise like this

.then(()=>{
    myPort = process.env.PORT;
    app.listen(myPort || 8000,()=>{
        console.log(`Server is running at port ${myPort}`);    
    })
})
.catch((err)=>{
    console.log("MONGO DB Connection failed *!* ",err);
    
})
































/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express'
const app = express()

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("ERROR from App",error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error: from connection catch ..",error)
        throw err

    }
})()
*/
