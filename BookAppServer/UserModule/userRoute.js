import express from 'express';
const routes = express.Router();
import userRecords from './userController';
import validate from './userValidation';
routes
.post('/registerUser',(req, res, next)=> {
  validate.validateRegistraion(req,res);
})
.post('/userLogin',(req, res, next)=> {
	var error=validate.validateLogin(req,res);
	if(error.length==0){
			userRecords.signIn(req, res);
	} else {
			res.send(error);
	}
});
export default routes;
