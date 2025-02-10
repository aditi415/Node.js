// perform operations on file 

const fs = require("fs");             //import           // fs-file system    fs module is used to interact with file 

//sync... call
fs.writeFileSync("./test.txt","Hey!");

//async......
fs.writeFile("./test.txt","hello Async",(err)=>{});

const result = fs.readFileSync("./contacts.txt","utf-8");
console.log(result);

fs.readFile("./contacts.txt","utf-8",(err,result)=>{                                          //read from file 
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
 } 
);

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

fs.appendFileSync("./test.txt", '${Date.now()} hey there\n');   // add to a file 

fs.cpSync("./test.txt", "./copy.txt");     //copy file 

fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt"));

fs.mkdirSync("my-docss/a/b", {recursive: true});                                     //make directory
