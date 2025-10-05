const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , 'public')));
app.set("view engine" , "ejs");


app.get('/' , function(req , res){
    res.render("index.ejs");


});

app.get('/read' , async function(req , res){
    let alluser = await userModel.find();
    res.render("read", {users : alluser});
});

app.post('/create' , async function(req , res){
    let {name , email , url} = req.body;
    console.log(req.body);
    let createdUser = await userModel.create({
        name : name,
        email : email,
        image : url
        //if both sides names are same then we can write only value and it will work--->name, 
    })
    res.redirect('/read');




});

app.get('/delete/:id' , async function(req , res){
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
})

app.get('/edit/:userid' , async function(req , res){
    let user = await userModel.findOne({_id: req.params.userid});
    res.render("edit" , {user});
})

app.post('/update/:userid' , async function(req , res){
    let {newname , newemail , newdurl} = req.body;
    let user = await userModel.findOneAndUpdate({_id: req.params.userid} , {
        image :newdurl,
        name : newname,
        email : newemail
    } , {new: true});

    res.redirect('/read');


})


app.listen(3000 , function(){
    console.log("running....");
});