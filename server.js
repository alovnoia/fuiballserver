//"C:\MongoDB\bin\mongod.exe" --dbpath "E:\Study\Nodejs\MongoData"
var url = require('url');
var async = require('async');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds161833.mlab.com:61833/fuiballdb'); 

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  User = require('./api/models/UserModel'),
  Ground = require('./api/models/GroundModel'),
  City = require('./api/models/CityModel'),
  Pitch = require('./api/models/PitchModel'),
  bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*app.use('/user', require('./api/routes/userRoutes'));*/


/*var data = ['', 'user'];
app.use(function(req, res, next) {
    console.log(req.originalUrl);
    data = req.originalUrl.split("/");
    console.log(data[1]);
    return next();
});*/

var routes = require('./api/routes/userRoutes');
routes(app);
	

/*async.waterfall([
    function(callback){
    	var data
        app.use(function(req, res, next) {
		    console.log(req.originalUrl);
		    data = req.originalUrl.split("/");
		    console.log(data[1]);
			callback(null, data[1]);
		    return next();
		});
    },
    function(data, callback){
		var routes = require('./api/routes/'+data+'Routes');
		routes(app);
		console.log(data);
		callback(null);
    },
], function (err,result) {
    console.log(result)
});*/


app.listen(port);


console.log('Fuiball RESTful API server started on: ' + port);