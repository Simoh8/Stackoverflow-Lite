import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
export const sqlConfig = {
    user: process.env.DB_USER as string,
    password: process.env.PASSWORD as string,
    database: process.env.DB_NAME as string,
    serve: 'localhost',

    pool: {
        max: 10,
        min: 0,
        idleTimeoutsMillis: 3000
    },
    options: {
        encrypt: false,
        trustSeviceCertificate: true
    }
}