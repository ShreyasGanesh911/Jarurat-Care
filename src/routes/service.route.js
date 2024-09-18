import express from 'express'
import { getAllServices,deleteService,updateService,addNewService } from '../controller/service.controller.js'

const serviceRouter = express.Router()
serviceRouter.get("/all",getAllServices)
serviceRouter.put("/update",updateService)
serviceRouter.post("/add",addNewService)
serviceRouter.delete("/delete/:id",deleteService)
export default serviceRouter