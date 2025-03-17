import express from "express"
import cors from 'cors'
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import connectDB from "./configs/db.js";
import routerList from "./routers/ListRoute.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT

connectDB()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use("/", routerList)

app.listen(PORT, () =>{
    console.log(`Server Running in Port ${PORT}`)
})