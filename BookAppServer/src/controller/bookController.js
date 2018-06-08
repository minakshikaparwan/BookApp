import bookSchema from '../model/bookModel';

import mongoose from 'mongoose';
import express from 'express';

import "babel-polyfill";
const books = mongoose.model('bookData', bookSchema);
const bookController={
    addaBook : (req, res) => {
        let newUser = new books(req.body);
        newUser.save((err, data) => {
            if(err){
                res.send(err);
            }
            console.log("Nodemon working");
            res.json(data);
        });
    },
    getBooks : (req, res) => {  
        books.find({}, (err, data) => {
            if(err){
                res.send(err);
            }
            res.json(data);
        });
    },
    deleteBook : (req,res) => {
        console.log(req.params.bookID);
        books.remove({_id:req.params.bookID},(err,data) => {
            if(err){
                res.send(err);
            }
            res.json({message: 'Successfully deleted a Book.'})
        })
    },
    updateBook : (req,res) => {
        books.findByIdAndUpdate({_id: req.params.bookID}, req.body, {new: true}, (err, data) => {
            if(err){
                res.send(err);
            }
            res.json({message: 'Successfully updated a Book.'})
        })
    }

}
export default bookController;