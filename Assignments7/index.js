const express = require('express')
const app = express()
const routes = require("./app.js")

app.use(routes)


let PORT = process.env.RUNNING_PORT;
app.listen(8080, ()=>{
    console.log("Server running")
})