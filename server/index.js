require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const products_controller = require('./products_controller')
const {SERVER_PORT,CONNECTION_STRING}= process.env 

app.use(express.json())

const api='/api/products'

app.get(api,products_controller.getAll)
app.get(api+`/:product_id`,products_controller.getOne)
app.post(api,products_controller.create)
app.put(api+'/:product_id',products_controller.update)
app.delete(api+'/:product_id', products_controller.delete)

massive({
    connectionString:CONNECTION_STRING,
    ssl:{rejectUnauthorized:false}
    })
.then(dbI=>{
    console.log("DB connected...( 。・_・。)")
    app.set('db',dbI)
    app.listen(SERVER_PORT,()=>console.log(`Server rolling on ${SERVER_PORT} (。・_・。 )`))
})
.catch(e=>console.log(e))



