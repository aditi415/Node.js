const fs = require("fs");

//blocking
const result = fs.readFileSync("contacts.txt","utf-8");
console.log(result);
console.log('1');


//non-blocking

console.log("1");
fs.readFile("contacts.txt","utf-8",(err, result)=> {                            //collback function 
    console.log(result);
})
console.log("2");