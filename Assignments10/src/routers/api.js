const express = require('express')
const router = express.Router()

//======== Student Controller ========
const {StudentController,GetAllStudent,deleteStudentData,updateStudentData,StudentPasswordReset} = require("../controllers/StudentController/StudentsController.js")

//======== Works Controller ========
const {WorksCreate,GetAllWorks,updateWorksData,deleteWorksData} = require("../controllers/WorksController/WorksController.js")


// user Ragistration and login
const {UserRegistrationInfo,UserLoginInfo} = require('../controllers/UserAuthentication/Authentication.js')

// token verify from midleware
const TokenVerify = require("../midleware/AuthVerifyMiddleware.js")


// CRUD OF STUDENT ==================
router.post("/Create",StudentController);
router.get("/GetAllStudent",GetAllStudent);
router.post("/updateStudentData",updateStudentData);
router.post("/deleteStudentData",deleteStudentData);

// STUDENT PASSWORD RESET =================
router.post("/StudentPasswordReset/:id",StudentPasswordReset);


// CRUD OF WORKS ==================
router.post("/WorksCreate",TokenVerify,WorksCreate)
router.get("/GetAllWorks",TokenVerify,GetAllWorks);
router.post("/updateWorksData",TokenVerify,updateWorksData);
router.post("/deleteWorksData",TokenVerify,deleteWorksData);


// UserRegistrationInfo ========================
router.post("/UserRegistrationInfo",UserRegistrationInfo)
router.post("/UserLoginInfo",UserLoginInfo)

module.exports = router