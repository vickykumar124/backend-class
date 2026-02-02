const express = require("express");
const app = express();
 const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken")
const util = require("util");


const promisify = util.promisify;

const promisidiedJwtsign = promisify(jwt.sign);

const promisdiedJWTverify = promisify(jwt.verify);


app.use(cookieParser());

const SECRET_KEY = "maheghguhuchcdcsh";

// token creation
app.get("/sign", async function(req,res){
// token create
const authtoken=await promisidiedJwtsign({"payload":"dueiuuudoioi"},SECRET_KEY);

// token cookies
res.cookie("jwt",authtoken,{
maxAge: 1000 * 60 * 60 * 24,

  httpOnly:true

})
// resonse send
res.status(200).json({
  message:"signed the jwt & sending it in the cookies"
})
})

// torken verification 
app.get("/verify",  async function (req, res) { 
  if (req.cookies && req.cookies.jwt){
    const authToken=req.cookies.jwt;
    const unlockedToken = await promisdiedJWTverify(
      authToken , SECRET_KEY);
     res.status(200).json({
      message:"jwt token is verified",
     "unlockedToken":unlockedToken,
    })
  }else{
    res.status(400).json({
      mesaage:"not jwt token found"
    })
  }
})




app.listen(3000, function() {
  console.log(" Server running on port 3000");
});

