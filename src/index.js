import app from "./app.js";
import {config} from 'dotenv';
import ConnectDb from "./config/db.js";

config()

const PORT = process.env.PORT

const ENVIRONMENT =process.env.NODE_ENV

const HOST_URL = ENVIRONMENT === 'PRODUCTION' ? process.env.PRODUCTION_URL:process.env.DEVELOPMENT_URL

ConnectDb()

app.listen(PORT,HOST_URL,()=>{
    console.log(`Server is Running on http://${HOST_URL}:${PORT}`)
})
