const express =  require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const InitiateDb = require('./config/db')
const userroutes = require('./routes/userrouters')

const PORT = 3001 || process.env.PORT;

var app = express()
InitiateDb()

app.use(bodyparser.json())
app.use(cors())
app.use('/images',express.static('uploads'))
app.use('/profile-images',express.static('profile-uploads'))


 
app.use('/userroutes',userroutes)

app.listen(PORT,(req,res)=>{
    console.log(`server started at port ${PORT}`)
})