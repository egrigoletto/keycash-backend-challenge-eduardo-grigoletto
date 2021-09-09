import "reflect-metadata"
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import propertyRoutes from './routes/property.routes'
import documentationRoutes from './routes/documentation.routes'
import { createConnection } from 'typeorm'

const app = express()

//setup
dotenv.config()
createConnection()


//middlewares
app.use(cors())
app.use(express.json())
app.use(propertyRoutes)
app.use(documentationRoutes)


app.listen(process.env.PORT || 8000, () => {
  console.info(`Server connected, port: ${process.env.PORT || 8080}`)
})


