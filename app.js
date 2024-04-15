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
var touristGuideRouter=require("./routes/touristGuide")
var readJsonFromGithub = require('./helpers/readJsonFromGithub')
var rentalGaadiRouter=require("./routes/rentalGaadi")

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/placesinacity', placesInACityRouter)
app.use('/placefromacity', placeFromACityRouter)
app.use('/placesbyfilter', placesByFilter)
app.use('/events', eventRouter)
app.use('/quickattractions', quickAttractionsRouter)
app.use('/touristguide',touristGuideRouter)
app.use('/rentalgaadi',rentalGaadiRouter)

app.get('/', async (req, res) => {
  // quickStart();
  res.send('Hello world')
})



app.get('/configuration', async (req, res) => {
  const url =
    'https://raw.githubusercontent.com/Spider8019/json_config/master/config.json'

  readJsonFromGithub(url).then((data) => {
    if (data) {
      console.log('JSON data:', data)
      // Process the JSON data here
    }
  })  
})

app.listen(5000, () => console.log('Server is listening on port 5000'))

// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error('MongoDB connection error:', err);
//     res.status(500).send('Database connection error');
// });
