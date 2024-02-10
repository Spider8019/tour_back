const express = require('express')
const arr=require("./arr")
const app = express()


app.get('/placesinacity', async (req, res) => {
  const result = arr
    .filter((item) => item.placeCity == req.query.cityName)
    .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
  res.send(result )
})
app.get('/placefromacity', async (req, res) => {
  const result = arr
    .filter((item) => item.placeCity == req.query.placeName)
    .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
  res.send(result[0])
})
app.listen(3000, () => console.log('server is listening on port 3000'))
