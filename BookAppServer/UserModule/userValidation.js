import express from 'express';
import userSchema from './userModel';
import mongoose from 'mongoose';
import userRecords from './userController';

const users = mongoose.model('bookUser', userSchema);
var userValidation = {
  validateRegistraion: function (req, res) {
    var err = [];
    var regData = {
      userName: req.body.userName.trim(),
      emailID: req.body.emailID.trim(),
      password: req.body.password.trim()
    };
    //-----------------UserName Validation------------------------
    if (regData.userName.length != 0) {
      if (!regData.userName.match(/^[a-zA-Z]+$/)) {
        err.push("Invalid User Name");
      }
    } else {
      err.push("User Name is required.")
    }
    //--------------------Password Validation--------------------------
    if (regData.password.length != 0) {
      if (!regData.password.match(/^[a-zA-Z0-9].{3,}$/)) {
        err.push("password must contain min 3 letter");
      }
    } else {
      err.push("Password is required.")
    }
    //---------------------Email Validation----------------------------
    users.findOne({ emailID: regData.emailID }).then(function (user) {
      if (user) {
        err.push("ID Exist");
      }
      if (regData.emailID.length != 0) {
        if (!regData.emailID.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
          err.push("Invalid Email ID");
        }
      } else {
        err.push("EmailID is required.")
      }
      if (err.length == 0) {
        userRecords.addUser(req, res);
      } else {
        res.send(err);
      }
    }).catch((handleError) => {
      console.log("Error");
     });
  },
  validateLogin: function (req, res) {
    var err = [];
    var loginData = {
      emailID: req.body.emailID.trim(),
      password: req.body.password.trim()
    };
    if (loginData.emailID.length != 0) {
      if (!loginData.emailID.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        err.push("Invalid Email ID");
      }
    } else {
      err.push("EmailID is required.")
    }
    if (loginData.password.length != 0) {
      if (!loginData.password.match(/^[a-zA-Z0-9].{3,}$/)) {
        err.push("password must contain min 8 letter");
      }
    } else {
      err.push("Password is required.")
    }
    return err;
  }
}
export default userValidation;
