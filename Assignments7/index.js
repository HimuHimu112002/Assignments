const express = require('express')
const app = express()
const routes = require("./app.js")

app.use(routes)

app.listen(5500, ()=>{
    console.log("Server running")
})