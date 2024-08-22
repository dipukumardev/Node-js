const { error } = require("console");
const fs = require("fs");


// // sync...
fs.writeFileSync("./text.txt", "Hello dipu");

// // Asyn..
fs.writeFile("./dipu.txt", "Hello Aditya", (error) =>{});



// Read the file

const result = fs.readFileSync("./dipu.txt","utf-8");
console.log(result);


fs.readFile("./dipu.txt","utf-8", (err,result) =>{
    if(err){
        console.log("Error", err);
    }
    else{
        console.log(result);
    }
})


// add more data in file;
fs.appendFileSync("./text.txt","hii dipu singh");



// copy the data in the other files;
fs.cpSync("./dipu.txt", "text.txt");


// statedata of the files;

console.log(fs.statSync("./dipu.txt"));

console.log(fs.statSync("./dipu.txt").isFile());


// Make a folder;

// fs.mkdirSync("dipu");
fs.mkdirSync("aditya/a/b",{recursive:true});

// remove a folder;
fs.rmSync("aditya/a/b", {recursive:true});