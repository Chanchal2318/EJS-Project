const express = require("express");
const connection = require("./connection");
const student = require('./routes/student');
const path = require('path');
const app = express();
const port = 3000;
connection();
app.use(student);
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server is listening on ${port}`);
    }
})