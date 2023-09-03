const express = require('express')
const router = express.Router()
const routerApi = require("./src/Routes/index.js")

router.use("/blog",routerApi)
module.exports = router