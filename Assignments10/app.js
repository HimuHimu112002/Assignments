const express = require('express')
const app = express()
const router = express.Router()
const routerApi = require("./src/routers/api")

//Security Middleware lib import
const rateLimit=require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const bodyParser = require('body-parser')


//Security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp())
app.use(bodyParser.json());

//Request Rate limit
const limiter = rateLimit({windowms:15*60*1000,max:3000});
app.use(limiter)


// Routing section ==============================
router.use("/api/v1",routerApi)
router.use('*', (req, res)=>{
    res.status(404).send('404 - Not Found');
})
module.exports = router