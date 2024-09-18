import service from '../models/service.model.js'
import AsyncHandler from '../utils/AsyncHandler.js'
import ErrorHandler from '../utils/ErrorHandler.js'
const success = true

// Get all service
export const getAllServices = AsyncHandler(async(req,res,next)=>{
    const result = await service.find()
    res.status(200).json({success,result})
})

export const addNewService = AsyncHandler(async(req,res,next)=>{
    const {serviceName,description,price} = req.body
    await service.create({serviceName,description,price})
    res.status(201).json({success,message:"Service updated successfully"})
})


// Update a service
export const updateService = AsyncHandler(async(req,res,next)=>{
    const {serviceName,description,price,id} = req.body
    const data = await service.findByIdAndUpdate({_id:id},{serviceName,description,price})
    if(data)
        return res.status(200).json({success,message:"Service updated successfully"})
    else return next(new ErrorHandler("No service found",404))
})

// Delete a service
export const deleteService = AsyncHandler(async(req,res,next)=>{
    const {id} = req.params
    const data = await service.findOneAndDelete({_id:id})
    if(data)
        return res.status(200).json({success,message:"Deleted successfully"})
    return next(new ErrorHandler("No service found",404))
})