const express=require("express");
const app=express();



// /posts ,post ->create a post
// /posts ,post  ->create a post
function beforeFn(req,res,next){
    console.log("createPost called")
    console.log("req.body",req.body)
   next(); 
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
app.post("/posts",beforeFn);
app.use(express.json());
//for post request
app.post("/posts",AfterFn);

 // //getAll request // 
// app.get("/posts", getAllPostsHandler);
//  // //get a post // 
// app.get("/posts/:postId",getPostById); 
// // 
// app.get("/posts/",updatePost); 

//  app.get("/posts/:postId",deletePost);



app.listen(3000,function(){
    console.log("serveer is running at port 3000");
})



