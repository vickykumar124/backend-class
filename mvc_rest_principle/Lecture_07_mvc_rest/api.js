
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cookieparser=require("cookie-parser");
dotenv.config();

// *******************db connection** ********************
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}
:${process.env.DB_PASSWORD}@cluster0.tb8nzgu.mongodb.net/?appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))

// usermodel could notb used here




// /****************Routes and their handler************************************/ 
// const {  createUser,
//     getAllUser ,
//     getUser,
//     deleteUser}= require("./userController");
   
    // const UserModel = require("./userModel");
    
    
    
app.use(express.json());
app.use(cookieparser());



/*auth k method and routes**/
const{loginHandler,signupHandler,logoutHandler, 
protectRouteMiddleware,  profilehandler,
isAdminMiddleWare}=require("./authController");

app.post("/login", loginHandler);
app.post("/signup", signupHandler);
 app.get("/logout", logoutHandler);
 app.get("/profile",  protectRouteMiddleware,  profilehandler);




/**this handler function i have  done in seperate file like authController**/ 
// const promisify =util.promisify;
// const promisdiedJWTsign=promisify(jwt.sign);
// const promisdiedJWTverify = promisify(jwt.verify);


// /******Handler functtion***/ 
//  async function signupHandler(req,res){

//     // 1 user-> data get ,check email ,password
//     // 2 email se check ->if exist -> already loggedin
//     // 3 create the user
//     try{
//   const  userObject=req.body;

//   console.log(userObject.email,userObject.password);
  
// if (!userObject.email || !userObject.password){
//     return res.status(400).json({
//         "message":"required data is missing",
//         status  :"failure"
//     })
// }
//     //    // 2 email se check ->if exist -> already loggedin
//     const user = await UserModel.findOne({email :userObject.email});

// if(user){
//        return res.status(400).json({
//         message:"user is already  logged In",
//         status :"Success"
//     })
// }
 
//     // data->req.body
//     const newUser= await UserModel.create(userObject);
//     //  send a responses 
//    res.status(201).json({
//         "message":  "user signed up successfully ",
//         user: newUser,
//         status: "success"
//    })

//    }catch(err){
//     console.log("err",err);
//     res.status(500).json({
//         message:err.message ,
//         status:"Failure"
//     })
//    }

// }

// /*****login working from here*****/ 

// async function loginHandler(req,res){
//     try{
//         //   console.log("Login route hit ✅");
//         const {email,password}= req.body;
//         const  user =await  UserModel.findOne({email});
//         if(!user){
//             //  console.log("User not found ❌");
//             return res.status(404).json({
//                 message:"Invalid email or password",
//                 status:"failure"
//             })
//         } 

//           console.log("Entered password:", password);
//          const areEqual =password == user.password;
//         if(!areEqual){
//             return res.status(400).json({
//                 message:"Invalid email or password",
//                 status :"failure"
//             })
//         }

// // /token create
// const authToken =await promisdiedJWTsign ({id: user["_id"]},process.env.JWT_SECRET_KEY);
// // tokrn->cookies
// res.cookie("jwt",authToken,{
//     maxAge:1000*60*60*24,
//     httpOnly:true,
// })
// // res send krna h
// res.status(200).json({
//     message:"user logged in successfully",
//     status:"success",
//     user:user
// })



//     }catch(err){
//         console.log("err",err);
//         res.status(500).json({
//             message:err.message,
//             status :"failure"
//         })
//     }


// }

// async function protectRouteMiddleware(req,res,next){
//     try{
//         // cookies token get
//         const token=req.cookies.jwt;
      
//         if(!token){
//           return  res.status(401).json({
//                 message:"Unauthorized access",
//                 status:"failure"
//             })
//         }
//         // verify->token ->if valid ->req.user ->user object 
//    const decryptedToken= await promisdiedJWTverify(token, process.env.JWT_SECRET_KEY);
//         // token identifier
//         // console.log("decryptedToken",decryptedToken)
//         req.user=decryptedToken.id;
//         next();


//     }catch(err){
//         console.log("err",err);
//         res.status(500).json({
//             message:"internal server error",
//             status:"failure"
//         })
//     }
// }

// // console.log("Login API called");
// async function profilehandler(req,res){
//     try{
//         const userId= req.user;
//         const user = await UserModel .findById(userId);
//         if(!user){
//             return res.status(400).json({
//             message:"user not found ",
//             status:"failure"
//             })
//         }
//         res.json({
//             message:"profile worked",
//             status:"success",
//             user:user
//         })
//     }catch(err){
//         console.log("err",err);
//         res.status(500).json({
//             message :"err message",
//             status :"failure"
//         })
//     }
// }


// /*****logouthandler****/ 

// async function logoutHandler(req,res,next){
//     try{
//         res.clearCookie('jwt',{path:"/"});
//     res.json({
//         message:"logout successfully",
//         status:"success"
//     })

//     }catch(err){
//     res.sttatus(500).json({
//         message:"err message",
//         status :"failure"
//     })
//     }

// }


/*****user routes and  their handler function**************/ 
const{createUser,getAllUser,getUser,deleteUser}=require("./userController")
app.post("/user", createUser)
app.get("/user",  getAllUser);
app.get("/user/:id", getUser);
app.delete("/user/:id", protectRouteMiddleware, deleteUser);

/***************auth k methods & routes*************************************/ 

app.listen(3000, function () {
    console.log("Server started on port 3000")
})
