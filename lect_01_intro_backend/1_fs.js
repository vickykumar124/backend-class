// koi bhi feature->module require krna padta hai
//fs moule used to anything that possible wwith files,and folder
//files can do--->read ,write,update,delete
//folder-->inside folder we can check his content,raname,delete

const fs = require('fs');

//file  me write krte hai

let fileName="file.txt";
let content="content aadded through nodejs ";

//synchronous version
console.log("```:adding content to the file");
fs.writeFileSync(fileName,content);
console.log("````:added content to file ");

//asynchronous version

console.log("Before");
fs.writeFile(fileName,content,function(err,data){
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log("file is written correctly");
    }
})
console.log("After");


//for reading a file
const contentofFile =fs.readFileSync(fileName);
console.log("content: "+contentofFile);


//for append a file 

fs.appendFileSync(fileName,"Append my data");
console.log("content");


/***************folder or directory********************/
console.log("creating folder");
fs.mkdirSync("lec-1");
console.log("created folder");

/***deletion folder******/
console.log("removing folder");
fs.rmdirSync("lec-1");
 console.log("removed folder");