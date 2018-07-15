import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/myDB');
const book = mongoose.Schema;
const bookSchema = new book({
    userID:{
        type:String,
    },
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
        type: Date,
    },
    price:{
        type: String,
        required: 'Enter the Price.'
    },
    totalCopies:{
        type: String,
    },
    description:{
        type: String,
    },
});
export default bookSchema;