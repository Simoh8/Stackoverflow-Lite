import { json } from "express"
import express from 'express'

const app=express()

app.listen(4600 ,()=>{
    console.log("Payment server is running");
    
})

app.get('/', (req,res)=>{

    res.status(200).json({message:"The intergration is ongoing "})
    
})