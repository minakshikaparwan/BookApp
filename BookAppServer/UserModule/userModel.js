import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/myDB');
const user = mongoose.Schema;
const userSchema = new user({
    userName:{
        type: String,
        required:'User Name is required'
    },
    emailID:{
        type: String,
        required:'Email ID is required'
    },
    password:{
        type: String,
        required:'Password is required'
    }
    
});
export default userSchema;
