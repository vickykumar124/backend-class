const mongoose=require("mongoose");
const express=require("express");
const app = express();

const dotenv=require("dotenv");
dotenv.config();



// const dbLink=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tb8nzgu.mongodb.net/?appName=Cluster0`;
const dbLink=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tb8nzgu.mongodb.net/?appName=Cluster0`
mongoose.connect(dbLink)
.then(function (connection){
    console.log("connect to db");
}).catch(err=>
    console.log(err)
);






// use create->jio cinema

const schemaRules={
    name:{
        type:String,
        required:true,
    },
    email:{
       type:String,
        required:true,
        unique:true,
    },
    password:{
         type:String,
        required:true,
        minLength:6,

    },
    confirmPassword:{
         type:String,
          minLength:6,
        
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    isPremium:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
        enum:["user","admin","feed","curator","moderator"],
        default:"user"
    }
}

// const userSchema=new mongoose.schema(schemaRules);
const userSchema = new mongoose.Schema(schemaRules);


const UserModel=mongoose.model("user",userSchema);




// post->route

app.use(express.json());

app.post("/user",async function(req,res){
    try{
        
        const userObject=req.body
        const user=await UserModel.create(userObject);
        res.status(201).json(user);

    }catch(err){
        // console.log("errrrr:",err)
        res.status(500).json({
            message:"internal server error"
      
        })

    }
});

app.listen(3000,function(){
    console.log("server is running at port 3000")
})