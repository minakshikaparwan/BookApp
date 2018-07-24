import userDetail from './UserDetailsModel';
import fs from 'fs';
import mongoose from 'mongoose';
import express from 'express';
import "babel-polyfill";

var userDetailController ={
    addUserDetails:(req,res)=>{
        const userData={
            image:req.file.path ,
            fName:req.body.fName,
            lName:req.body.lName,
            company:req.body.company,
            dob:req.body.dob,
        };
        
        //userData.image= fs.readFileSync(imgPath);
        //userData.image.contentType = 'jpeg';
        console.log(__dirname + '/uploads/'+req.file.originalname);
        const newUserDetail= new userDetail(userData);
        newUserDetail.save((err, data) => {
			if (err) {
				res.send(err);
			}
			console.log("Details Saved");
			//res.send(null);
		});
    }
}
export default userDetailController;