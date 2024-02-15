const express = require('express')
const arr=require("./arr")
const app = express()
const mongooseConn = require('./connections/mongoose'); 
const cors=require("cors")
// const pool=require("./connections/mysql")

var placesInACityRouter=require("./routes/placesInACity")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/placesinacity', placesInACityRouter);

app.get('/placefromacity', async (req, res) => {
  // res.send(arr)
  const result = arr
    .filter((item) => item.placeName == req.query.placeName)
    // res.send(result)
  res.send(result[0])
})

mongooseConn.once('open', function() {
  console.log('MongoDB database connection established successfully');
  app.listen(3000, () => console.log('Server is listening on port 3000'));
});

mongooseConn.on('error', function(err) {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the application if unable to connect to the database
});

// app.listen(3000, () => console.log('server is listening on port 3000'))

















// app.get('/placesinacity', async (req, res) => {
//   const result = arr
//     .filter((item) => item.placeCity == req.query.cityName)
//     .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
//   res.send(result )
// })