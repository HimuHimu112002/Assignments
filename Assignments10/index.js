const express = require('express')
const app = express()
const routes = require("./app.js")

const DatabaseConnection = require('./src/database/db.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
DatabaseConnection()

//let PORT = process.env.RUNNING_PORT;
app.listen(8080, ()=>{
    console.log("Server running done")
})