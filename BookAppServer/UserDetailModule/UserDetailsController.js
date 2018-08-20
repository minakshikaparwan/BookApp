import userDetail from './UserDetailsModel';
import fs from 'fs';
import mongoose from 'mongoose';
import express from 'express';
import "babel-polyfill";

var userDetailController ={
    addUserDetails:(req,res)=>{
        //var imagePath='/UserDetailModule/uploads/'+req.file.originalname;
        const userData={
            userID:req.body.userID,
            image:req.file.filename,
            fName:req.body.fName,
            lName:req.body.lName,
            company:req.body.company,
            dob:req.body.dob,
        };
        console.log(__dirname + '/uploads/'+req.file.originalname);
        const newUserDetail= new userDetail(userData);
        newUserDetail.save((err, data) => {
			if (err) {
				res.send(err);
			}
            console.log("Details Saved");
            res.send(data);
            // res.redirect(`/userDetails/${userData.fName}`);
		});
    },
    getUserDetails:(req,res)=>{
        userDetail.findOne({ userID: req.params.userID }, (err, data) => {
			if (err) {
				res.send(err);
			}
			res.json(data);
		})
    }
}
export default userDetailController;