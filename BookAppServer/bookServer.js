import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import userRoute from "./UserModule/userRoute";
import bookRoute from "./BookModule/bookRoute";
import "babel-polyfill";

let app = express();
app.set('view engine','ejs')
let port = process.env.PORT||3000;
app.use(cors());

app.use( express.static( path.join( __dirname, '../', 'BookApp') ) );
app.use(bodyParser.json())

app.use('/',userRoute);
app.use('/',bookRoute);
var server = app.listen(port, ()=> {
    console.log('server started at ' + server.address().port);
});
