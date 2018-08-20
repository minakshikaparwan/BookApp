import express from 'express';
import multer from 'multer';
import userDetailController from './UserDetailsController';

var routes = express.Router();

const storage = multer.diskStorage({
    destination: __dirname + '/uploads/',
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
const fileFilter = (req, file, cb) => {
// reject a file
if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
} else {
    cb(null, false);
}
};
const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });
  
// const upload=multer({dest:__dirname + '/uploads/'}); 


routes
.post('/',upload.single('image'),(req,res,next)=>{
  console.log(req.file );
  userDetailController.addUserDetails(req,res);
})
.get('/userProfile/:userID',(req,res)=>{
  userDetailController.getUserDetails(req,res);
})
export default routes;