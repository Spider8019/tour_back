const express = require('express')
const arr = require('./arr')
const app = express()
const mongooseConn = require('./connections/mongoose')
const cors = require('cors')

var placesInACityRouter = require('./routes/placesInACity')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/placesinacity', placesInACityRouter)

app.get('/placefromacity', async (req, res) => {
  const result = arr.filter((item) => item.placeName == req.query.placeName)
  res.send(result[0])
})

mongooseConn.once('open', function () {
  console.log('MongoDB database connection established successfully')
})
app.listen(3000, () => console.log('Server is listening on port 3000'))

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error('MongoDB connection error:', err);
//     res.status(500).send('Database connection error');
// });
