const mongoose = require("mongoose");
const WorksModel = require('../../models/WorksModel/WorkersModel.js')


// Create Student controller section =================
async function WorksCreate(req, res){
  try{
    let {title,classNote,description,status,email} = req.body
    let Task = new WorksModel({
        title,classNote,description,status,email
    })
    Task.save()
    res.send({success: "WorksCreate Created Successfully"})
  }catch(err){
    res.status(200).json({ status: "error", error: err.toString() });
  }
}


// Get all Student data find =================
async function GetAllWorks(req, res){
    let data = await WorksModel.find({})
    res.send(data)
    res.send({success: "Works Read Successfully"})
}

// Update Student Data  ==============================
async function updateWorksData(req, res){
    try {
      let query = req.body["_id"];
      let reqBody = req.body;
      let data = await WorksModel.updateOne({_id: query}, {$set: reqBody}, {upsert: true});
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }

};


//! Delete Student ========================================
async function deleteWorksData(req, res){
    let ids = req.body['_id']
    try {
      let data = await WorksModel.deleteOne({_id:ids});
      res.status(200).json({ status: "Delete Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
};
module.exports = {WorksCreate,GetAllWorks,updateWorksData,deleteWorksData}