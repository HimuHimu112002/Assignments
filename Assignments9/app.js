const express = require('express')
const router = express.Router()
const routerApi = require("./src/routers/api")
const app = new express()

// Sequrity Middleware inport
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors') 


// Sequrity Middleware implements
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});





router.use("/api/v1",routerApi)
// route vul hoile akhan theke error dibe
router.use('*', (req, res)=>{
    res.status(404).send('404 - Not Found');
})


module.exports = router