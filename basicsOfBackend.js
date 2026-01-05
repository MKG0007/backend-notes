JavaScript Basics Must know before Starting Backend
<------------------------------------------------------->

Array in javaScript-->
in the this language , Array can hold all the datatypes (primitive and user defined both)

important mehtods for array-->

1) forEach
it is use to access all array element use the value for doing the task 
->it not return any new array 

arr.forEach(function(val){
    console.log(val + 'hello');
})

2)map
it is use to apply modification on all elements of array.
->return the new modified array.
->original and updated array both have same number of element

let arr = arr.map(function(val){
    return val+12;
})


3)filter
it is to apply the filter process by using any condition defined by the developer on the array.
and return filtered element as a newArray.


let arr = arr.filter(function(val){

    if(val%2 == 0) return val;
})

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

objects in javaScript-->

in simple words, objects are the collection of key value pairs.

let obj = {
age : 20,
name : "mayank"
}

we can change the values like this-->
obj.name = "kumar";

but in some cases,
we don't want someone make changes in the object

then can stop the changes
--> Object.freeze(obj_name);
after this we can not add and change the values of the object 
let obj = {
    name : "mayank",
    age : 20,
    course : "computer"

}

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Synchronous--> 
line by line execution

asychronous-->
when the code is async in nature then put it into the side stack(where process running parallel) and start executing sync code 
and after execution check the aynsc code executed sucessfully or not if it is then take it to the main stack then execute it.


->use async if you are doing asyncronous work in the function
async function name(){
    ........await fetch(`link`)
}

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




node.js-->
it is the javaScript runtime environment 

-->in simple words
we write js code --> then it will goes to the js wrapper which wrapped up the v8 engine and then make some changes in it and gave it to the v8(written in c++) and it creates the server.  


setup -->
first we have to create a packages.json file 
->npm init--> by this command it will asked to enter the package filename
->npm init -y(it will not ask any question just create the package file)


pre installed models of the node.js-->

 file system -->
//to get all the file system feature into the variable 
const fs = require('fs');

// this will rewrite the file and also create it if the file already not created
fs.writeFile("hey.txt" , "hey hello kaise ho" , function(err){
  // error handling
    if(err) console.log("error");
    else console.log("done");
})


// it is use to add and update the file
// it adds the new content at the end
fs.appendFile("hey.txt" , " i am mayank kumar gupta" , function(err){
  //error handling
    if(err) console.log("error");
    else console.log("done");
})


// it is use to rename the file name 
fs.rename('oldfilename' , 'newfilename.txt' , function(err){
  // error handling
    if(err) console.log("there some problem");
    else console.log("all done");
})



// it is use to create/copy(yoho.txt) the data 
fs.copyFile("hello.txt" , `yoho.txt` , function(err){
  // error handling
    if(err) console.error(err.message);
    else console.log("all done");
})



// it is use to the remove the file 
fs.unlink("yoho.txt" , function(err){
  // error handling
    if(err) console.error(err);
    else console.log("file is removed");
})


// by default it remove the empty file folder 
// but it can also remove the non-empty folder by set the recursive value: true
fs.rmdir("./copy" ,{recursive: true}, function(err){
    if(err) console.error(err.message);
    else console.log("folder removed");
})
// note-->
// but prefer to use "rm" to remove the non-empty folder 


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
there is the set of rules to do something in internet and we must follow these rules 

//get the functions inside the variable
const http = require('http');

// this is how we create a server 
const server = http.createServer(function(req , res){
    res.end("hello world");
})
server.listen(3000);



npm(node package manager)-->
files that comes with node.js core is called module 
and what we download by using npm is called "package"

installation by using npm-->
----------------------------
command -> npm i package_name

for uninstall -->
---------------------------
npm uninstall package_name

note-->
to install any particullar version of the package
-------------------------------------------------
npm install package_name@version_name


dependencies --> packages and package dependances
devDependencies --> packages that only use on development period after project deployment they have no use in the project.


scripts in project-->
default scripts(which auto downloaded at the node installation)--> npm name

custom scripts(created by the user)--> npm run name


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
framework --> it have defined rules and flow that must followed by the developer for using the framework technology
-A framework provides a structured environment and a predefined flow for building applications. 
It decides how your code should be organized and when it will be executed.


library --> it gives the tools and there no specific flow of the project. 
-A library is a collection of reusable functions or modules that you can call whenever you need them. 
It doesn’t impose any structure or flow on your code.


Express.js framework-->
-----------------------
introduction to Express.js
-> npm i express(to install the express)
-> it is the npm package and framework
->it manages everything from recieving the request to giving the response


setting up the basic express.js--->
-----------------------------------
in node when we make changes in the code then it will not show on the browser until you restart it.
->to avoid this 
---------------
we use "nodemon" npm package--> to do this for us in auto mode
--> npm i nodemon -g(globle install) 


// this line holding the function 
const express = require('express');

// doing the function call here 
// it contian all the functionality of express
const app = express()

// it convert json data into mechine readable fromat 
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// middleware
// it will execute first before all "get" route 
app.use(function(req , res , next){
    console.log("run the middleware");
    next();// passes to next one which will going to execute and according to the route

});


// -----(route, request_handler function)
// -----to only give the response
app.get('/', (req, res) => {
  res.send('Hello World and mayank')
});

// route other then root route
app.get("/profile" , (req , res) =>{
    res.send("champion i am mayank");
});


this is the in build route for error handler 
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000 , function(){code});


middleware-->
-------------
when server accept the resquest and just before the routing some thing stop the request to do some task on it that thing is called the middleware

case of middleware->
--------------------
we add the user detail before sending to the server that makes request easir to accept and respond faster



from handling and working with the forms-->
when we try to do something on the website that time it asked for login first to identify the user and then after task completion the server forget about the user
so, we have to login again and again

and to avoid this--->
cookie--> after your request it stores the user string (user detial) comes with the response and when we next try to do something it attacted that string with the request that help the server to know the user


session-->the login period created by the help of cookie is called session


when we send the request to the server the data is tranfer in the form of blob--> and to convert it into the readible format 




 
small project--->
1)initiallized the projects(creating the package.jsom file)

2)install express package






-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
BackEnd--> to have two server
1)-->application server(handles routings)
this server handles request , response and interaction between database if required
to perform the task.
    
2)-->database server(data related task)
this server handles data related task in which storing data of the project.


data storage-->where the user data stored
like database

types of databases-->
1) sql(structured query language)-->data stored in the form table
2) NoSql(not only sql)--> data stored in the form of object
NoSql -- mongoDB

Tree representation-->
database --> collection(data belongs to the current project) --> document(inside the collection)

steps to create the mongoDB connection-->

-----------------------------------------------------
CODE                    DATABASE
-----------------------------------------------------
mongoose.connect->   database create
model create->       collection 
CREATE->             document
-----------------------------------------------------


full routing struture-->
------------------------
const express = require('express');//access and stroging the function 
const app = express();//calling the function stores the result
const path = require('path');

// these both files use to convert blob into mechine sutable format
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// adding the path with the folder that will going to use for code files(lke css , js , images)

// __dirname--> it gives the path of the current working folder 
// and in this below line we are just joining the path with 'public'
app.use(express.static(path.join(__dirname, 'public')));
// setting the ejs for template access
app.set('view engine' , 'ejs');

// this the route router
app.get ("/" , function(req , res){
    // we don't have to write extensio of the file
    // rendring the ejs file
    res.render("index");
});

// dynamic route-->
// adjust the variable part of the router 
// write the ':' before the common name make it dynamic
app.get("/app/:about" , function(req , res){
    // get the change part of the path / url
    // req.params.about
    // if the multiple url part is variable then it will send the 
    // change in the form of object
    let username = req.params.about;
    res.send(`welcome Mr.${username}`);
})

// port creation
app.listen(3000 , function
    (){
        console.log("running.....");
    }
)

setting up ejs and ejs pages --->
----------------------------------
install ejs by the npm -> npm i ejs
setup ejs as a view engine


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
mongoDB connection setup-->
---------------------------

//store the function in the varaible
const mongoose = require('mongoose');

// creating a database file 
mongoose.connect(`mongodb://localhost:27017/mongopep`);

// structure of this Schema (document)
const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String
})

// exproting the schema to the mongoDB to store 
// other file of the project can use it
module.exports = mongoose.model("user" , userSchema);


user creation with CRUD operation-->
------------------------------------

// mention in the route file use and access the schema
const userModel = require("./usermodel");

// user creation according to the defined schema
app.get('/create' ,async function (req , res) {
   let createUser =  await userModel.create({
        name: "mayank",
        email: "mgk@gmail.com",
        username: "mkg"
    })
    console.log(createUser);
    res.send(createUser);

  });

// user updation
app.get('/update' ,async function (req , res) {
   let updatedUser =  await userModel.findOneAndUpdate({username: "mkg"} , {name : "mayank kumar gupta"} , {new: true})
    console.log(updatedUser);
    res.send(updatedUser);

  });

// this for access all the user in the database
app.get('/read' ,async function (req , res) {
    // this will give all the user 
    //find() always gives array even the there is no user
   let alluser =  await userModel.find();

    // this way we can select the specific user 
    // and if there are multiple user of same username it will give the first one 
//    let alluser = await userModel.findOne({usernam: "mayank"});
    console.log(alluser);
    res.send(alluser);

  });

// this is used to delete the user
app.get('/delete' , async function (req , res) {
    let users = await userModel.findOneAndDelete({username: "mkg"});
    res.send(users);

  });


note-->
findOneAndUpdate(this is use to find the single data from the database by using its "id"
    but there are multiple with same attribute you mentioned
        then it will give you the first one from the database)
findOneAndDelete(for deletion)
findOne(to find the single user from the database) 

find(its gives all the user present in the database in the form of array)
create(it is use to create the user)

------------------------------------------------------------------------------------------

    
Authentication (checking that user is the valid user or not)
Authorization (checking that have the right to access any perticular information)

package needed: jsonWebToken , bcrypt

how to set cookie:
- res.cookie("name" , "mayank")
to get the cookie:
- req.cookies

note:-
- after set-up the cookie to the user's browser.
- whenever it make any request then the request will come with cookie by default.


bcrypt:
- it is a package use for password hashing.
encryption using bcrytp:
syntax-
genSalt(this will give the salt(string) that use in encryption)
hash(this will hash the password with the salt)
    
bcrypt.genSalt(10 , (err , salt)=>{
    bcrypt.hash("password" , salt , (err , hash)=>{
        console.log(hash) // hashed password
    });
});

decryption using bcrypt:
- we actually not do decryption just compare the password string with hashed password string 
and bcrypt property(compare) automatically done comparision

syntax:
bcrypt.compare("normal password" , "hashed password" , (err , result)=>{
    console.log(result) //return boolean value
})


 






    














 





  


  
