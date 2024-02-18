const express = require('express')
const arr = require('./arr')
const app = express()
const { connectDB } = require('./connections/mongoose')
const cors = require('cors')

var placesInACityRouter = require('./routes/placesInACity')
var placesByFilter = require("./routes/placesByFilter")
var placeFromACityRouter = require('./routes/placefromacity')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/placesinacity', placesInACityRouter)
app.use('/placefromacity', placeFromACityRouter)
app.use('/placesbyfilter',placesByFilter)

app.get('/', async (req, res) => {
  res.send('Hello world')
})

app.listen(3000, () => console.log('Server is listening on port 3000'))

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error('MongoDB connection error:', err);
//     res.status(500).send('Database connection error');
// });
