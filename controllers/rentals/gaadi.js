const Gaadi = require('../../models/rentalGaadi.js')

exports.addAGaadi = (req, res) => {
  let inputData = { ...req.body }
  Gaadi.createData(inputData)
    .then((data) => {
      console.log('New gaadi added:', data)
      res.status(201).send('Event gaadi successfully')
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error')
    })
}

exports.getAllGaadiCategoryInACity = (req, res) => {
    Gaadi.getAllGaadiCategoryInACity(cityName=req.query.cityName)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Internal Server Error' +err)
      })
  }
