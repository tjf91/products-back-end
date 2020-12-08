require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')


app.use(express.json())

const {SERVER_PORT,CONNECTION_STRING}= process.env 

app.listen(SERVER_PORT,()=>console.log(`Server rolling on ${SERVER_PORT}`))