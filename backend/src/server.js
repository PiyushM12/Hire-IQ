import express from "express"
import path from "path"
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";



const app =  express()
const __dirname = path.resolve();
const PORT = ENV.PORT|| 5000;
console.log(PORT);
console.log(ENV.DB_URL)
app.get("/health",(req,res)=>{
    res.status(200).json({msg:"success from app"})
})
app.get("/books",(req,res)=>{
    res.status(200).json({msg:"this is books route"})
})

if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    });
}

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
    connectDB();
})


const startServer= async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
    
})
    }
    catch(error){
        console.error("error connecting to server",error)
    }
}
startServer();