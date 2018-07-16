import userSchema from './userModel';
import mongoose from 'mongoose';
import express from 'express';
import "babel-polyfill";
import CryptoJS from "crypto-js";

const users = mongoose.model('bookUser', userSchema);

const userController = {
  addUser: (req, res) => {
    var userData={
      userName:req.body.userName,
      emailID:req.body.emailID,
      password:req.body.password,
    }
    let newUser = new users(userData);
    var password=newUser.password;
    newUser.password=CryptoJS.SHA256(password+'secret');
    newUser.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(null);
    });
  },
  signIn: (req, res) => {
    const emailID = req.body.emailID;
    users.findOne({ emailID: emailID }).then(function (user) {
      if (!user) {
        res.send({error:"Invalid user ID"});
      } else {
        var password=req.body.password;
        req.body.password=CryptoJS.SHA256(password+'secret').toString();
        if(user.password===req.body.password){
          console.log(user._id.toString());
          res.send({userID:user._id.toString()});
        }
        else{
          res.send({error:"Invalid Password"});
        }
      }  
    }).catch((error) => {
      res.send("error")
    });
  }
}
export default userController;
