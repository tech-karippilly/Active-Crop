import app from "./app.js";
import {config} from 'dotenv';

config()

const PORT = process.env.PORT
const HOST_URL = process.env.DEVELOPMENT_URL

app.listen(PORT,HOST_URL,()=>{
    console.log(`Server is Running on http://${HOST_URL}:${PORT}`)
})
