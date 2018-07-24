import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import userRoute from "./UserModule/userRoute";
import bookRoute from "./BookModule/bookRoute";
import userDetailRoute from "./UserDetailModule/UserDetailsRoute";
import "babel-polyfill";
import multer from "multer";


// var urlencodedParser = bodyParser.urlencoded({ extended: true });
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs')
let port = process.env.PORT||3000;
app.use(cors());

app.use( express.static( path.join( __dirname, '../', 'BookApp') ) );
app.use(bodyParser.json())

app.use('/',userRoute);
app.use('/',bookRoute);
app.use('/',userDetailRoute);
var server = app.listen(port, ()=> {
    console.log('server started at ' + server.address().port);
});
