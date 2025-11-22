
 <!-- #STEPS -->
    #bash#
  # Open terminal in the folder where you have your server
 npm init -y 
npm i express
npm i --save-dev nodemon

# to use nodemon -> go to package.json and inside the scripts add this line
"scripts": {
   "start":"npx nodemon index.js"
 }