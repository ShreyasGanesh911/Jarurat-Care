import mongoose from "mongoose";

const connectDb = async()=>{
   try{
    await mongoose.connect("mongodb://localhost:27017/JaruratCare")
    console.log("Connected to db")
   }catch(err){
    console.log("Error in connecting to DB ",err)
   }
}

export default connectDb