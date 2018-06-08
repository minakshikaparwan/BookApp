import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/LibDB');
const book = mongoose.Schema;
const bookSchema = new book({
    bookTitle:{
        type: String,
        required: 'Enter the Book Name.'
    },
    publisher:{
        type: String,
        required: 'Enter the Publisher.'
    },
    auther:{
        type: String,
        required: 'Enter the Auther.'
    },
    language:{
        type: String,
    },
    type:{
        type: String,
    },
    publishDate:{
        type: String,
    },
    price:{
        type: String,
        required: 'Enter the Password.'
    },
    totalCopies:{
        type: String,
    },
    description:{
        type: String,
    },
});
export default bookSchema;