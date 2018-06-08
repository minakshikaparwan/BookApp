import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import routes from "./src/router/bookRoute";
import "babel-polyfill";

let app = express();
app.set('view engine','ejs')
let port = process.env.PORT||3000;
app.use(cors());

app.use( express.static( path.join( __dirname, '../', 'BookApp') ) );
app.use(bodyParser.json())

app.use('/',routes);

var server = app.listen(port, ()=> {
    console.log('server started at ' + server.address().port);
});
