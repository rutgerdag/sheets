'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

/* appears to work */
// var db = mongoose.connect('mongodb://arsfarb:hR9K3kk*h@jello.modulusmongo.net:27017/ti5byJid', function(err, db) {
//     try{
        
//     db.collection('Charactersheet', {}, function(err, charactersheets) {
//         charactersheets.remove({_id: ObjectID("586d6caf5222a50b474d6807")}, function(err, result) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(result);
//             db.close();
//         });
//     });
    
//     }catch (err){
//         console.info(err);
//     }
// });

/* original working connection: */
// var db = mongoose.connect('mongodb://arsfarb:hR9K3kk*h@jello.modulusmongo.net:27017/ti5byJid');     // connect to mongoDB database on modulus.io
//var db = mongoose.connect('mongodb://rutgerdag:hR9K3kk*h@charactersheet-95029.app.xervo.io:27017/charactersheet');
	//db: 'mongodb://arsfarb:hR9K3kk*h@jello.modulusmongo.net:27017/ti5byJid',
// Init the express application
var app = require('./config/express')(db);



//This worked to remove the charactersheets collection
//  mongoose.connection.collection('charactersheets').drop(function(err) { if (err) { console.log("err:", err); } });


/* appears to run */
// mongoose.connection.db.executeDbCommand( {dropDatabase:1}, function(err, result) { if (err) { console.log(err); } done(); });

/* TypeError: Cannot read property 'drop' of undefined */
// mongoose.connection.collections['Charactersheet'].drop( function(err) { if (err) { console.log('collection dropped');} });

/* TypeError: db.getCollectionNames is not a function */
// db.getCollectionNames().forEach(function(c) {
//     if(!c.match("^system.indexes")) { 
//         db.getCollection(c).drop();
// 	}
// });
  
/* TypeError: db.listCollections is not a function */
//  db.listCollections().forEach(function(c) {
//     if(c != 'system.indexes') { 
//         db.getCollection(c).drop();
//     }
//   });
  
/* TypeError: db.collection is not a function. */
// db.collection('Charactersheet',function(err, collection){
//     collection.remove({},function(err, removed){
//     });
// });

  
//console.info(db);
// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);