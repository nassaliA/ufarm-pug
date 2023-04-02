const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose= require("mongoose")
// we are creating an eviroment file
// require("dotenv").config();


// importing database file directly
const config = require("./config/database")
const bodyParser =require('body-parser')

const adminRoutes =require("./Routes/adminRoutes")
const farmer1DRoutes =require("./Routes/farmer1DRoutes")
const ufarmLRoutes =require("./Routes/ufarmLRoutes")


// creating a connection between the controller and the database
mongoose.connect(config.database,{
    //useNew collects data from the front end then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db= mongoose.connection
  // checking if db has connected
  db.once("open", ()=>{
    console.log("connected to db")
  })
  db.on("error",(err)=>{
  console.error(err)
  })


app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "public")));


app.use("/",adminRoutes)
app.use("/",farmer1DRoutes)
app.use("/",ufarmLRoutes)


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));






app.listen(3000, ()=> console.log('listening on port 3000'))
