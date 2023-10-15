const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const UserResistration = require('../../models/userRegistration/UserRegistration.js')
const EmailSend = require('../../helper/EmailSend/EmailSend.js')

async function UserRegistrationInfo(req, res){
    try{
        let {firstName, lastName, userName, email,password,phone} = req.body
        
        let UserInfo = new UserResistration({
            firstName, lastName, userName, email,password,phone
        })
        UserInfo.save()
        EmailSend(email)
        res.send({success: "Registration Successfully"})
    }catch(err){
        res.send({ status: "error", error: err.toString() });
    }

}

async function UserLoginInfo(req, res){
    let {email,password} = req.body


    //token create after login
    let Payload={
        exp:Math.floor(Date.now()/1000) + (24 * 60 * 60),
        data: {Name: "HMHimu", City: "Dhaka", admin: true}
    }
    let Token = jwt.sign(Payload, "SecretKey123");


    let EmailExist = await UserResistration.find({email: email, password: password})
    if(EmailExist.length > 0){
        res.send({success: "Loging Successfully", token:Token})
    }else{
        res.json({"error":"Login Failed"})
    }

}

module.exports = {UserRegistrationInfo,UserLoginInfo}