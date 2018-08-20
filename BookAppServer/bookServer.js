import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import userRoute from "./UserModule/userRoute";
import bookRoute from "./BookModule/bookRoute";
import userDetailRoute from "./UserDetailModule/UserDetailsRoute";
//import uploads from "./UserDetailModule/uploads";
import "babel-polyfill";
import multer from "multer";
import hbs from "express-handlebars";

// var urlencodedParser = bodyParser.urlencoded({ extended: true });
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','hbs')
let port = process.env.PORT||3000;
app.use(cors());
//app.use('/fil',express.static(__dirname+'UserDetailModule/uploads'));
app.use('/', express.static(path.join(__dirname, './','UserDetailModule/uploads')))
app.use( express.static( path.join( __dirname, '../', 'BookApp') ) );
app.use(bodyParser.json())

app.use('/',userRoute);
app.use('/',bookRoute);
app.use('/',userDetailRoute);
var server = app.listen(port, ()=> {
    console.log('server started at ' + server.address().port);
});
