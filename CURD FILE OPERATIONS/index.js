const fs = require("fs");

//fs.mkdirSync("dir");                //this will make new folder inside the directory CURD

fs.writeFileSync("dir/file.txt","Hello this is my first node js CURD operation");

fs.appendFileSync("dir/file.txt","hello nodejs");

const data = fs.readFileSync("dir/file.txt","utf8");
console.log(data);

fs.renameSync("dir/file.txt","dir/File.txt");

fs.unlinkSync("dir/File.txt");     //here txt file inside dir folder will be deleted

fs.rmkdirSync("dir");           //here dir will be deleted 