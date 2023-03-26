import express from 'express';
import cron from 'cron';
import welcomeEmail from './Emailservice/welcome';
const app = express();

cron.schedule('*/10*****',async()=>{
    console.log('Refersh after 10 seconds');
    await welcomeEmail()
    
})

app.listen(3200, () => {
    console.log('Background services are running ' );
    
})

