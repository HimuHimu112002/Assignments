const express = require('express')
const router = express.Router()

const {userControllerrCreate,userControllerread,userControllerdelete,userControllerupdate} = require("../controllers/userController.js")

const {subAdminControllercreate,subAdminControllerread,subAdminControllerdelete,subAdminControllerupdate} = require("../controllers/subAdminController.js")

const {postControllercreate,postControllerread,postControllerdelete,postControllerupdate} = require("../controllers/postController.js")

const {adminControllercreate,adminControllerread,adminControllerdelete,adminControllerupdate} = require("../controllers/adminController.js")

// userController
router.get("/userControllerrCreate",userControllerrCreate);
router.get("/userControllerread",userControllerread);
router.get("/userControllerdelete",userControllerdelete);
router.get("/userControllerupdate",userControllerupdate);

// adminController
router.get("/subAdminControllercreate",subAdminControllercreate);
router.get("/subAdminControllerread",subAdminControllerread);
router.get("/subAdminControllerdelete",subAdminControllerdelete);
router.get("/subAdminControllerupdate",subAdminControllerupdate);

// subAdminController
router.get("/postControllercreate",postControllercreate);
router.get("/postControllerread",postControllerread);
router.get("/postControllerdelete",postControllerdelete);
router.get("/postControllerupdate",postControllerupdate);

// postController
router.get("/adminControllercreate",adminControllercreate);
router.get("/adminControllerread",adminControllerread);
router.get("/adminControllerdelete",adminControllerdelete);
router.get("/adminControllerupdate",adminControllerupdate);

module.exports = router