const express = require('express')
const router = express.Router()
const {createBlog,readBlog,updateBlog,deleteBlog} = require("../Controllers/blogController");

const {createBlogDetail,readBlogDetail,updateBlogDetail,deleteBlogDetail} = require("../Controllers/blogDetailsController");

const {commentCreate,commentRead,commentUpdate,commentDelete} = require("../Controllers/commentController");

const {messageCreate,messageRead,messageUpdate,messageDelete} = require("../Controllers/messageController");

const {createProduct,readProduct,updateProduct,deleteProduct} = require("../Controllers/productController");

const {createProfile,readProfile,updateProfile,deleteProfile} = require("../Controllers/profitController");

const {createProject,readProject,updateProject,deleteProject} = require("../Controllers/projectController");

const {createProtf0lio,readProtf0lio,updateProtf0lio,deleteProtf0lio} = require("../Controllers/protfolioController");

const {createService,readService,updateService,deleteService} = require("../Controllers/serviceController");

const {createTitle,readTitle,updateTitle,deleteTitle} = require("../Controllers/titleController");

// ================= blogController
router.get("/createBloag",createBlog);
router.get("/readBlog",readBlog);
router.get("/updateBlog",updateBlog);
router.get("/deleteBlog",deleteBlog);

// ================== blogDetailsController
router.get("/createBlogDetail",createBlogDetail);
router.get("/readBlogDetail",readBlogDetail);
router.get("/updateBlogDetail",updateBlogDetail);
router.get("/deleteBlogDetail",deleteBlogDetail);

// =================== commentController
router.get("/commentCreate",commentCreate);
router.get("/commentRead",commentRead);
router.get("/commentUpdate",commentUpdate);
router.get("/commentDelete",commentDelete);


// =================== MessageController
router.get("/messageCreate",messageCreate);
router.get("/messageRead",messageRead);
router.get("/messageUpdate",messageUpdate);
router.get("/messageDelete",messageDelete);


// =================== ProductController
router.get("/createProduct",createProduct);
router.get("/readProduct",readProduct);
router.get("/updateProduct",updateProduct);
router.get("/deleteProduct",deleteProduct);


// =================== ProfileController
router.get("/createProfile",createProfile);
router.get("/readProfile",readProfile);
router.get("/updateProfile",updateProfile);
router.get("/deleteProfile",deleteProfile);

// =================== ProjectController
router.get("/createProject",createProject);
router.get("/readProject",readProject);
router.get("/updateProject",updateProject);
router.get("/deleteProject",deleteProject);

// =================== ProtfolioController
router.get("/createProtfolio",createProtf0lio);
router.get("/readProtfolio",readProtf0lio);
router.get("/updateProtfolio",updateProtf0lio);
router.get("/deleteProtfolio",deleteProtf0lio);

// =================== ServiceController
router.get("/createService",createService);
router.get("/readService",readService);
router.get("/updateService",updateService);
router.get("/deleteService",deleteService);

// =================== TitleController
router.get("/createTitle",createTitle);
router.get("/readTitle",readTitle);
router.get("/updateTitle",updateTitle);
router.get("/deleteTitle",deleteTitle);

module.exports = router