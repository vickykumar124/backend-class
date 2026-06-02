const fs = require("fs");

const folderName=["intro to backen dev with nodejs","Intro to express and postman",
    "mongodb and mongoose","MVC architecture and Rest API",
    "data validation and hooks in mangoose"]


for(let i=0; i < folderName.length;i++){
    //folder name 
    let currentFolderName=`Lecture-${i+1}-${folderName[i]}`;
    //function folder creation
    fs.mkdirSync(currentFolderName);
    //writeFilesync
    let filepath=`${currentFolderName}/readme.md`;
    fs.writeFileSync(filepath,"# NewAgenda ") ;
    console.log("created folder:",currentFolderName);

}