import ejs from 'ejs';
import mssql from 'mssql'
import sendEmail from '../Helpers/index'
import { sqlConfig} from '../Config'

interface User {
    id:string
    username:string
    email:string
    role:string
    password:string
    is_sent:number
    }
 const welcomeEmail = async()=>{
    
const pool =await mssql.connect(sqlConfig)
const User= await(await pool.request().query("SELECT * FROM user WHERE is_sent='not_sent'")).recordset

for (let user of User){
   ejs.renderFile('Templates/welcomeEmail.ejs', {username:user.username}, async(error,html)=>{
    const message = {
        from: process.env.EMAIL_ADDRESS,
        to:user.email,
        subject:`Succesful Registration To Write's Oasis`,
        html
        
    }
try {
    await sendEmail(message),
    await pool.request().query(`UPDATE user SET is_sent ='sent' WHERE id= '${user.id}' `)
} catch (error) {
    console.log(error);
    
}




   }) 
}

 }

 const paymentDisbursed =async()=>{ 
    const pool= await mssql.connect(sqlConfig)
 }
 const assignedTask= async()=>{
    const pool= await mssql.connect(sqlConfig)
 }


 export default welcomeEmail
//  export default paymentDisbursed
