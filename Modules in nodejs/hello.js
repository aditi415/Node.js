const math = require("./math");       //TO IMPORT WE USE REQUIRE FUNTION const is used same as #include in c & ./(means  select file from current directory)


const {add,sub} = require('./math');        //destrucor

console.log("Math value is", math.addFn(2,4));   //function call
  
console.log("Math value is", math.add(1,2));

//console.log("math value is",math);      /show which function is to perform

//console.log("math value is",math(2,4));

//console.log("math value is", math);
