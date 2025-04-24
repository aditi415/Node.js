const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/company");        //give the path of database by mongo

//-----------------load view--------------

const express = require("express")
const app = express();

/*app.set('view engine','ejs');      //told express which view engine is begin used here ejs is used
app.set('views','./views');         //and where it is kept its inside views folder
*/

app.set('view engine','pug');           //told express which view engine is begin used here ejs is used
app.set('views','./views');             //and where it is kept its inside views folder

/*
app.get('/register',function(req,res){
   res.render("register");             //can also write register.ejs
})
*/             //at a time only 1 engine is used

app.get('/login',function(req,res){
    res.render("login");             //can also write login.pug
 })


app.listen(3000,function(){
    console.log("Server is running...");
})
