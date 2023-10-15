const mongoose = require("mongoose");
const StudentsModel = require('../../models/StudentModel/StudentsModel.js')


// Create Student controller section =================
async function StudentController(req, res){
  try{
    let {email,FirstName,LastName,Mobile,Password,Address,Roll,Class} = req.body
    let Task = new StudentsModel({
      email,FirstName,LastName,Mobile,Password,Address,Roll,Class
    })
    Task.save()
    res.send({success: "Task Created Successfully"})
  }catch(err){
    res.status(200).json({ status: "error", error: err.toString() });
  }
}


// Student Password Reset =================
async function StudentPasswordReset(req, res){
    try {
      let id = new mongoose.Types.ObjectId(req.params.id);
      let query = { _id: id };
      let reqBody = req.body;
      let data = await StudentsModel.updateOne(query, reqBody);
      res.status(200).json({ status: "Password Reset Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
}


// Get all Student data find =================
async function GetAllStudent(req, res){
    let data = await StudentsModel.find({})
    res.send(data)
    res.send({success: "Student Read Successfully"})
}

// Update Student Data  ==============================
async function updateStudentData(req, res){
    try {
      let query = req.body["_id"];
      let reqBody = req.body;
      let data = await StudentsModel.updateOne({_id: query}, {$set: reqBody}, {upsert: true});
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }

};


//! Delete Student ========================================
async function deleteStudentData(req, res){
    let ids = req.body['_id']
    try {
      let data = await StudentsModel.deleteOne({_id:ids});
      res.status(200).json({ status: "Delete Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
};
module.exports = {StudentController,GetAllStudent,deleteStudentData,updateStudentData,StudentPasswordReset}