const express = require('express')
const router = express.Router()

const {blogControllerCreate,blogControllerread,blogControllerdelete,blogControllerupdate} = require("../controllers/blogController.js")

const {commentControllercreate,commentControllerread,commentControllerdelete,commentControllerupdate} = require("../controllers/commentController.js")

const {messageControllercreate,messageControllerread,messageControllerdelete,messageControllerupdate} = require("../controllers/messageController.js")

const {portfolioControllercreate,portfolioControllerread,portfolioControllerdelete,portfolioControllerupdate} = require("../controllers/portfolioController.js")

const {productControllercreate,productControllerread,productControllerdelete,productControllerupdate} = require("../controllers/productController.js")

router.get("/blogControllerCreate",blogControllerCreate);
router.get("/blogControllerread",blogControllerread);
router.get("/blogControllerdelete",blogControllerdelete);
router.get("/blogControllerupdate",blogControllerupdate);


router.get("/commentControllercreate",commentControllercreate);
router.get("/commentControllerread",commentControllerread);
router.get("/commentControllerdelete",commentControllerdelete);
router.get("/commentControllerupdate",commentControllerupdate);


router.get("/messageControllercreate",messageControllercreate);
router.get("/messageControllerread",messageControllerread);
router.get("/messageControllerdelete",messageControllerdelete);
router.get("/messageControllerupdate",messageControllerupdate);


router.get("/portfolioControllercreate",portfolioControllercreate);
router.get("/portfolioControllerread",portfolioControllerread);
router.get("/portfolioControllerdelete",portfolioControllerdelete);
router.get("/portfolioControllerupdate",portfolioControllerupdate);

router.get("/productControllercreate",productControllercreate);
router.get("/productControllerread",productControllerread);
router.get("/productControllerdelete",productControllerdelete);
router.get("/productControllerupdate",productControllerupdate);

module.exports = router