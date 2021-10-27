import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();
let app = express();

// config app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// view engine
viewEngine(app);

// init web routes
initWebRoutes(app);

connectDB();

// port
let port = process.env.PORT || 1111;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
