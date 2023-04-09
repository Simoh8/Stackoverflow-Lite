import { json  } from "express"
import request from 'request'
import express from 'express'

const app=express()

app.listen(4600 ,()=>{
    console.log("Payment server is running");
    
})
 

app.get('/acces_token' ,(req,res)=>{
   //acces_token
   request({
    let url =""
    let auth= new Buffer

   })
   
})

app.get('/', (req,res)=>{

    res.status(200).json({message:"The intergration is ongoing "})
    
})