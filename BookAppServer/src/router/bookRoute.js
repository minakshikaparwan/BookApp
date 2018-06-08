import express from 'express';
const routes = express.Router();
import bookRecords from '../controller/bookController';

routes
    .get('/bookRecords',(req, res, next)=> {
        bookRecords.getBooks(req,res);
        })
    .post('/bookRecords',(req, res, next)=> {
        bookRecords.addaBook(req, res);
    });

routes.delete('/bookRecords/:bookID',(req, res, next)=> {
    bookRecords.deleteBook(req,res);
})
routes.put('/bookRecords/:bookID',(req, res, next)=> {
    console.log(req.params.bookID)
    bookRecords.updateBook(req,res);
})
export default routes;