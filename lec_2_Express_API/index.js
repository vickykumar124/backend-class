


 const express = require("express");
 const fs= require("fs");
 const app=express();
 console.log("before");


 const content= fs.readFileSync("posts.json","utf-8");
 const jsonPosts =JSON.parse(content);
//  console.log("jsonPosts",jsonPosts);




 function getAllPostsHandler(req, res){
    try{
         console.log("Received get request");
     console.log("jsonPosts",jsonPosts);
    res.status(200).json(jsonPosts);

    }catch(err){
    res.status(500).json({
        Message:"Internal server  error"
    })
    }
    
} 






function  getPostById(req,res){
 try{
const postid=req.params.postId;
 console.log("postid",postid);
 const postArr =jsonPosts.posts;
 for(let i=0;i< postArr.length;i++){
    if(postArr[i].id == postid){
        return res.status(200).json({
            post:postArr[i]
        })
    }
 }
 res.status(404).json({
    post:"Page Not Found"
  } )
 } catch(err){
    //console.log("error",Error);
      res.status(500).json({
        response: "Something went Wrong On Our End"
    })
 }
 

//for internal code error status code would be 500;

}

// function createPost(req,res) {
// try{
//     console.log("🔥 BODY RECEIVED:", req.body);



// res.status(200).json(req.body);

//  const postsArr = jsonPosts.posts;

//         postsArr.push(req.body);
//         res.status(200).json({
//             message: "post created "
//         })
// }catch(err){
// res.status(500).json({
//         response: "Something went Wrong On Our End"
// })
// }
// }

// function updatePost(req,res){
//     try{

//     }
// }catch(err){

// }



// function deletePost(){
//     try{}
// }



function createPost(req, res) {
  try {
    console.log("🔥 BODY RECEIVED:", req.body);

    const postsArr = jsonPosts.posts;
    postsArr.push(req.body);

    fs.writeFileSync("posts.json", JSON.stringify(jsonPosts, null, 2)); // Save to file

    res.status(201).json({
      message: "Post created successfully!",
      newPost: req.body
    });

  } catch (err) {
    res.status(500).json({
      response: "Something went wrong on our end"
    });
  }
}




app.use(express.json());

//for post request
app.post("/post",createPost);

//getAll  request
app.get("/posts", getAllPostsHandler);

//get a post
app.get("/posts/:postId",getPostById);
// app.get("/posts/",updatePost);
// app.get("/posts/:postId",deletePost);





//server start
app.listen(3000, function () {
    console.log("server is running at port 3000");
})
console.log("After");

// app.listen(4000,function(){
//     console.log("server is running at port 4000");
// })
// console.log("After")






//we can say it  call back function
// app.listen(4000,function(){
//     console.log("server is running at port 4000");
// })




/********************this is same code but inside this there is get request abd res.************************************************************************/ 


// const express = require("express");
// const app=express();



// function getHandler(req, res){
//     console.log("Receiveed get request");
//     const postData= {
        
 
//     "id": 1,
//     "title": "His mother had always taught him",
//     "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//     "tags": [
//         "history",
//         "american",
//         "crime"
//     ],
//     "reactions": {
//         "likes": 192,
//         "dislikes": 25
//     },
//     "views": 305,
//     "userId": 121


//     };
//   res.status(200).json(postData);
// }


// //get request
// app.get("/posts", getHandler);



// //server start
// app.listen(3000,function(){
//     console.log("server is running at port 3000");
// })

// app.listen(4000,function(){
//     console.log("server is running at port 4000");
// })




// // function gatHandler(){
// //     console.log("Receiveed get request");
// //     const PostData={
        
// //     "id": 1,
// //     "title": "His mother had always taught him",
// //     "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
// //     "tags": [
// //         "history",
// //         "american",
// //         "crime"
// //     ],
// //     "reactions": {
// //         "likes": 192,
// //         "dislikes": 25
// //     },
// //     "views": 305,
// //     "userId": 121

// //     }
// //     res.status(200).json(PostData);
// // }


// // //get request
// // app.get("Post",gatHandler);