//mongodb://nodejs:NodeJS@ds055925.mongolab.com:55925/personnes
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydata'); 

var db= mongoose.connection; 

db.on('error', function(error){
console.log('Warning !**** mongoDB error');
console.log(error);
});

db.on('on', function(){
console.log('**** mongoDB ok');
});

exports.mongoose= mongoose;
