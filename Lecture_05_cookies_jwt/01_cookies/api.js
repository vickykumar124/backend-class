const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//  console.log("🚀 api.js FILE RUNNING 🚀");

app.use(cookieParser());

// HOME ROUTE
app.get("/", function(req, res) {
  console.log("get request received");
  // set cookie
  res.cookie("prevPage", "homePage", {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    
  });

  res.status(200).json({
    message: "received request on home page",
  });
});

app.get("/product", function (req, res) {
  //console.log("PRODUCT ROUTE HIT", req.cookies);

  let messageStr = " ";

  if (req.cookies && req.cookies.prevPage) {
    messageStr = `You visited ${req.cookies.prevPage} page before`;
  }else {
messageStr="no previous page found"
  }

  res.status(200).json({
    message:messageStr
  });
});


//clarcookies
app.get("/clearCookies", function (req, res) {
  res.clearCookie("prevPage", { path: "/" });
  res.status(200).json({
    message: "i have clear cookies"
  });
});


// SERVER START
app.listen(3000, function() {
  console.log("✅ Server running on port 3000");
});


// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.get("/", function (req, res) {
//   console.log("get request received");

//   res.cookie("prevPage", "homePage", {
//     maxAge: 1000 * 60 * 60 * 24 // 1 day
//   });

//   res.status(200).json({
//     message: "received request on home page"
//   });
// });

// app.get("/product", function (req, res) {
//   let messageStr = "";

//   if (req.cookies && req.cookies.prevPage) {
//     messageStr = `You visited ${req.cookies.prevPage} page before`;
//   } else {
//     messageStr = "no previous page found";
//   }

//   // console.log("Product cookies:", req.cookies);

//   res.status(200).json({
//     message: messageStr
//   });
// });

// // SERVER START
// app.listen(3000, function () {
//   console.log("✅ Server running on port 3000");
// });
