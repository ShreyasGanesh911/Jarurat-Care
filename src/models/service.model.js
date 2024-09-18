import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
        serviceName :{
            type:String,
            required:[true,"Name must be provided"],
            unique:[true,"Name must be unique"]
        },
        description :{
            type:String,
            required:[true,'Description must be provided']
        },
        price :{
            type:Number,
            required:[true,"Price must be provided"],
            min:[0,"Price cannont be negative"]
        },
})

const service = mongoose.model('service',serviceSchema)

export default service
