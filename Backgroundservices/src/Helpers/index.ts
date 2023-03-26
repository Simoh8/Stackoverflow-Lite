import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path :path.resolve(__dirname, '../../.env')})

function createTransporter(config: any){
    return nodemailer.createTransport(config)
}
let config={
    host:'smtp.gmail.com',
    service:'gmail',
    port:'587',
    auth:{
        user:process.env.EMAIL_ADDRESS,
        password:process.env.PASSWORD
    }
}
const sendEmail = async (messageOptions: any) => {
    let transporter= createTransporter(config)
    await transporter.verify()
    await transporter.sendMail(messageOptions,(err,info)=>{
        console.log(info);
        
    })
}
export default sendEmail