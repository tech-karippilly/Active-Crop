import swaggerJsdoc from 'swagger-jsdoc'
import { config } from 'dotenv'
config()
const ENVIRONMENT =process.env.NODE_ENV
const HOST_URL = ENVIRONMENT === 'PRODUCTION' ? process.env.PRODUCTION_URL:process.env.DEVELOPMENT_URL
const options ={
    definition:{
        openapi: "3.0.0",
        info:{
            title:"API Documendation",
            version:'1.0.0',
            description:"API documentation using Swagger"
        },
        servers:[
            {
                url:`http://${HOST_URL}:3000`
            },
        ],
    },
    apis:["./routes/*.js"],
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec