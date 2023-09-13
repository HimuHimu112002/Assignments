const express = require('express')
const router = express.Router()
const routerApi = require("./src/routers/api")

router.use("/api/v1",routerApi)

// route vul hoile akhan theke error dibe
router.use('*', (req, res)=>{
    res.status(404).send('404 - Not Found');
})


module.exports = router