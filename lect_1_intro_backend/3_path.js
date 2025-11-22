const path = require("path");
const fs=require("fs");
//it gives global variable.
console.log("path of current folder",__dirname);
console.log("path of current file",__filename);
console.log("process",process);
console.log("global",global)


console.log("```````````````````````````````");
const directorypath=path.dirname(__dirname);
console.log();
console.log("directoryName",directorypath);

/***for extension**/
const fileExt=path.extname(__filename);
console.log("fileExt",fileExt);

const pathtoMyFile=path.join(__dirname,"../","fname ","fname");
console.log("pathtoMyFile",pathtoMyFile);
fs.writeFileSync(pathtoMyFile,"# CSS Notes");


