const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const colors = require('colors'); 
const mongo = require('mongodb');
const mongoose = require('mongoose');
const helmet = require('helmet')

const index = require('./routes/index');


var app = express();
app.use(compression())
app.use(helmet())


/**

Mongodb conn boilerplate

const currentEnv =  app.get('env')

if(currentEnv === 'development')
    mongoose.connect("mongodb://localhost:27017/<db>");
else
    mongoose.connect("mongodb://<db-user>:<db-pass>@<host>:<port>/<db>");

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '));

db.once('open', function(){
    console.log(colors.green('Connected to: ') +  currentEnv + " || " + db.host + ' stockHunter.us'.green);
});

*/

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.send(err.message, err.status || 500)
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.send(err.message, err.status || 500)
});


module.exports = app;
