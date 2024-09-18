import app from "./app.js";
import connectDb from "./db/index.js";
const port = 4000
connectDb().then(()=>{
    app.listen(port,()=>{
        console.log("Active at port ",port)
    })
}).catch((err)=>{
    console.log("Some error occured ",err)
})
