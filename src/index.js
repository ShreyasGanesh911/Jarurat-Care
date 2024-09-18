import app from "./app.js";
import connectDb from "./db/index.js";
import 'dotenv/config'
const port = process.env.PORT || 4000
connectDb().then(()=>{
    app.listen(port,()=>{
        console.log("Active at port",port)
    })
}).catch((err)=>{
    console.log("Some error occured ",err)
})
