import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/myDB');

const userProfile = mongoose.Schema;
const profileSchema = {
    userID:{
        type:String,
    },
    image:{
        type:String,
    },
    fName:{
        type: String,
    },
    lName:{
        type: String,
    },
    dob:{
        type: Date,
    },
    company:{
        type: String,
    }
};
const userDetail = mongoose.model('userDetails', profileSchema);
export default userDetail;
