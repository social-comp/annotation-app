var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
// const multer = require('multer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const FormData = require('form-data');

// var functions = require('./javascript/save');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));                 


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
  //next(createError(404));
//});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







module.exports = app;


ejs = require('ejs');

'use strict';

const fs = require('fs');






var filename= './data/fphijacked_top_50_rt_tweets.json'; //put your JSON file here
var writefile = './data/fphijacked_top_50_rt_tweets_annotated.json';

try{
  let rawdata = fs.readFileSync(filename);
  var posts = JSON.parse(rawdata);
  //console.log(posts);
  exports.filename = filename;
  exports.posts = posts;
  exports.writefile = writefile;
  this.posts=posts;

}catch(err){
  console.log(err);
}


app.post('/gettingdata', function(req, res, next){
   // req.body object has your form values
   console.log("done with annotating");
   console.log(res.namecalling);
   console.log(res.repetition);
});
/*
//testing out how to write to JSON file

var annotatedfile = 'sophia.json';
//duplicate file  to write to/ append to
fs.copyFile(filename, annotatedfile, (err) => {
  if (err) {
    console.log(err);
  }

});






//add the results to an array?
//append to each in that order



posts.forEach(function(post) {
  console.log(posts.length)
  var data = fs.readFileSync(annotatedfile);
  post["taunting"] ="1"; 
  // Adding the new data to our object

    
  // Writing to our JSON file
  var newData2 = JSON.stringify(posts);
  fs.writeFile(annotatedfile, newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
   
});


//end of testing 




*/

app.post('/save', function(req, res){
  console.log(req.namecalling);


});





app.get('/', function(req, res){
  response.render("index", {posts: posts});
});


app.post('/', function(req, res){

  console.log(req.body);

  
  
  var formData = req.body;
  var jsonString = JSON.stringify(formData);
  fs.writeFile(writefile, jsonString, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });

  /*
  */

  console.log("Submitted");
  res.send("All good!");

  
});
