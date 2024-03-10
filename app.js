const express = require('express')
const app = express()
const { connectDB } = require('./connections/mongoose')
const cors = require('cors')
// const {quickStart}=require("./gcp/translation")

var placesInACityRouter = require('./routes/placesInACity')
var placesByFilter = require('./routes/placesByFilter')
var placeFromACityRouter = require('./routes/placefromacity')
var eventRouter = require('./routes/event')
var quickAttractionsRouter = require('./routes/quickAttractions')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/placesinacity', placesInACityRouter)
app.use('/placefromacity', placeFromACityRouter)
app.use('/placesbyfilter', placesByFilter)
app.use('/events', eventRouter)
app.use('/quickattractions', quickAttractionsRouter)

app.get('/', async (req, res) => {
  // quickStart();
  res.send('Hello world')
})

app.listen(5000, () => console.log('Server is listening on port 5000'))

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error('MongoDB connection error:', err);
//     res.status(500).send('Database connection error');
// });
