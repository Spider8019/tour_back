const Place = require('../models/attractions')

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
      res.status(500).send('Internal Server Error')
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
