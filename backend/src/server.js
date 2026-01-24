import express from "express"

import { ENV } from "./lib/env";



const app =  express()

console.log(ENV.PORT);
console.log(ENV.DB_URL)
app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from app"})
})
app.listen(ENV.PORT,()=>{
    console.log("listening on port ENV.PORT")
})