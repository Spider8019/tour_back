const Place = require('../models/attractions')
const readJsonFromGithub = require('../helpers/readJsonFromGithub')

exports.getAllPlacesInACity = (req, res) => {
  Place.getAllData()
    .then((data) => {
      // console.log(data)
      const result = data
        .filter((item) => item.placeCity == req.query.cityName)
        .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}

exports.addAPlacesInACity = (req, res) => {
  let inputData = { ...req.body }
  console.log(inputData)
  // res.send(inputData)
  Place.createData(inputData)
    .then((data) => {
      console.log('New place added:', data)
      res.status(201).send('Place added successfully')
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error')
    })
}

exports.getTouristGuides = (req, res) => {
  // Assuming categoryName is passed as a query parameter

  const url =
    'https://raw.githubusercontent.com/Spider8019/json_config/master/touristguide.json'

  readJsonFromGithub(url).then((jsondata) => {
    if (jsondata) {
      console.log('JSON data:', jsondata)
      // Process the JSON data here
      res
        .status(200)
        .send(jsondata.filter((item) => item.city == req.query.cityName))
    }
    else{
      res.status(201).send({})
    }
  })
}
