import express from 'express'
import APIError from './utils/APIError.js'
import serviceRouter from './routes/service.route.js'

const app = express()
app.use(express.json())
app.use("/service",serviceRouter)
app.use(APIError)
export default app