const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRouter = require('./routes/authRouter')
const cors = require('cors')

dotenv.config({path: './config/config.env'})
const app = express()
app.use(express.json());

console.log("connection string",process.env.DATABASE)
const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser:true,
}).then(con=>{
    //console.log(con.connections)
    console.log('DB connection successful')
})

app.use(cors({
    origin:'http://localhost:3000',
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials:true
}))

app.get('/', (req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'connection successful'
    })
})

app.options('*', cors())
app.use('/api/v1/auth', authRouter)

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})