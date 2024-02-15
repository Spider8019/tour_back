const express = require('express')
const arr = require('./arr')
const app = express()
const mongooseConn = require('./connections/mongoose')
const cors = require('cors')
// const pool=require("./connections/mysql")

var placesInACityRouter = require('./routes/placesInACity')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/placesinacity', placesInACityRouter)

app.get('/placefromacity', async (req, res) => {
  // res.send(arr)
  const result = arr.filter((item) => item.placeName == req.query.placeName)
  // res.send(result)
  res.send(result[0])
})

mongooseConn.once('open', function () {
  console.log('MongoDB database connection established successfully')
  app.listen(3000, () => console.log('Server is listening on port 3000'))
})

mongooseConn.on('error', function (err) {
  console.error('MongoDB connection error:', err)
  res.status(500).send('Database connection error') // Return a 500 status code with an error message
})

// app.get('/placesinacity', async (req, res) => {
//   const result = arr
//     .filter((item) => item.placeCity == req.query.cityName)
//     .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
//   res.send(result )
// })
