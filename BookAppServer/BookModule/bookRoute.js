import express from 'express';
import bookRecords from './bookController';
import validateBook from './bookValidation';
const routes = express.Router();
routes
	.get('/bookRecords/:userID', (req, res, next) => {
		bookRecords.getBooks(req, res);
	})
	.post('/bookRecords', (req, res, next) => {
		var error = validateBook.validateBookData(req, res);
		if (error.length == 0) {
			bookRecords.addaBook(req, res);
		} else {
			res.send(error);
		}
	})
	.delete('/bookRecords/:bookID', (req, res, next) => {
		bookRecords.deleteBook(req, res);
	})
	.put('/bookRecords/:bookID', (req, res, next) => {
		console.log(req.params.bookID)
		var error = validateBook.validateBookData(req, res);
		if (error.length == 0) {
			bookRecords.updateBook(req, res);
		} else {
			res.send(error);
		}
	})
export default routes;