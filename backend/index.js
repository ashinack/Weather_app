const express = require('express')
const bodyParser = require('body-parser')
const config=require('./config/connection')
const weather=require("./models/weather")
const dotenv=require('dotenv')
const weatherRouter=require('./route/weatherRoutes')
const app = express()
const cors = require("cors");


dotenv.config()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json())

// app.use('/',(req,res)=>{
//     console.log(req.body);
//     res.send('hello')
// })

app.use('/api/weather', weatherRouter)

app.listen(process.env.PORT,()=>{
    console.log(`listening ${process.env.PORT}`);
})