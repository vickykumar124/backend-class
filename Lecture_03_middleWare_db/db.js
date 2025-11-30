const mongoose=require("mongoose");

// KVCS9uxjPZIArH77 password  aur gandhi
// const password="GcKpTJWg89TMzfdK";

const dotenv=require("dotenv");
dotenv.config({ path: "./Lecture_03_middleWare_db/.env" });

// ****  sensitive info
// username
// password
// we should know how to use it.
//  ****

const dbLink=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tb8nzgu.mongodb.net/?appName=Cluster0`;

mongoose.connect(dbLink)
.then(function (connection){
    console.log("connect to db");
}).catch(err=>
    console.log(err)
);
