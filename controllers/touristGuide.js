const touristGuide = require('../models/touristGuide')
const TouristGuide = require('../models/touristGuide')

exports.getAllTouristGuides = (req, res) => {
  TouristGuide.getAllTouristGuidesOfCity(cityName = req.query.cityName)
    .then((data) => {
        // console.log(data
      res.send(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' +err)
    })
}

exports.createTouristGuides = (req, res) => {
    let inputData = { ...req.body }
    touristGuide.createData(inputData)
      .then((data) => {
        console.log('New touristguide added:', data)
        res.status(201).send('Tourist guide added successfully')
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Internal Server Error')
      })
  }
