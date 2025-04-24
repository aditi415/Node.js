const mongoose = require("mongoose");

const employee = mongoose.Schema({                                   //structure of model
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const Employee = mongoose.model("Employee",employee);      //Employee is model

module.exports = Employee;
