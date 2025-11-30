
const express=require("express");
const app=express();

// /posts ,post  ->create a post
function beforeFn(req,res,next){
    console.log("Before called")
    const length=Object.keys(req.body).length;
    if(length>0&& req.body.name && req.body.USerID){
        const FullNameNamArr=req.body.name.split(" ");
        req.body.FirstNAme=FullNameNamArr[0];
        req.body.LastName=FullNameNamArr[1];
        next()
    }else{
        res.status(404).json({
            message:"bad request"
        })
    }
  
} 


function AfterFn(req,res){
    console.log("after fn called")
    console.log("req.body",req.body);
    res.status(200).json({
        message:"response send",
        body:req.body
    })
}

console.log("THIS IS THE CORRECT SERVER FILE");

app.use(express.json());
app.post("/posts",beforeFn);
//for post request
app.post("/posts",AfterFn);


 // //getAll request // 
// app.get("/posts", getAllPostsHandler);
//  // //get a post // 
// app.get("/posts/:postId",getPostById); 
// // 
// app.get("/posts/",updatePost); 

//  app.get("/posts/:postId",deletePost);



app.use(function(req,res){
    res.status(400).json({
        message:"404 Page not found",
    
    })
})




app.listen(3000,function(){
    console.log("serveer is running at port 3000");
})





