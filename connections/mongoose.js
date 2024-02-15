//

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://spider8019official:spider8019official@cluster0.ptqucsb.mongodb.net/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://spider8019official:spider8019official@cluster0.ptqucsb.mongodb.net/nodeapp');
var conn = mongoose.connection
conn.on('connected', function () {
  console.log('database is connected successfully')
})
conn.on('disconnected', function () {
  console.log('database is disconnected successfully')
})
conn.on('error', console.error.bind(console, 'connection error:'))
module.exports = conn
