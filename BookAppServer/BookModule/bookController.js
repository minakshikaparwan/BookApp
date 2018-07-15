import bookSchema from './bookModel';
import mongoose from 'mongoose';
import express from 'express';
import "babel-polyfill";
const books = mongoose.model('bookData', bookSchema);
const bookController = {
	addaBook: (req, res) => {
		var bookData = {
			userID: req.body.userID,
			bookTitle: req.body.bookTitle,
			publisher: req.body.publisher,
			auther: req.body.auther,
			language: req.body.language,
			type: req.body.type,
			publishDate: req.body.publishDate,
			price: req.body.price,
			totalCopies: req.body.totalCopies,
			description: req.body.description,
		}
		let newBook = new books(bookData);
		newBook.save((err, data) => {
			if (err) {
				res.send(err);
			}
			console.log("Nodemon working");
			res.send(null);
		});
	},
	getBooks: (req, res) => {
		books.find({ userID: req.params.userID }, (err, data) => {
			if (err) {
				res.send(err);
			}
			res.json(data);
		});
	},
	deleteBook: (req, res) => {
		console.log(req.params.bookID);
		books.remove({ _id: req.params.bookID }, (err, data) => {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Successfully deleted a Book.' })
		})
	},
	updateBook: (req, res) => {
		books.findByIdAndUpdate({ _id: req.params.bookID }, req.body, { new: true }, (err, data) => {
			if (err) {
				res.send(err);
			}
			res.send(null);
		})
	}
}
export default bookController;