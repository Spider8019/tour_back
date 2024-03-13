const Place = require('../models/attractions')

exports.getPlacesByFilter = (req, res) => { // Assuming categoryName is passed as a query parameter
  Place.getPlacesByProvidedFilter(req.query)
    .then((data) => {
      const result = data
        .map(({ placeName, placeImage, placeCity }) => ({
          placeName, placeImage, placeCity
        }))
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}

exports.getTopSearches = (req, res) => { // Assuming categoryName is passed as a query parameter
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  Place.getTopSearches(limit)
    .then((data) => {
      const result = data
        .map(({ placeName, placeImage, placeCity,placeVisit }) => ({
          placeName, placeImage, placeCity,placeVisit
        }))
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}

exports.getLatestPlaces = (req, res) => { // Assuming categoryName is passed as a query parameter
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  Place.getLatestPlaces(limit)
    .then((data) => {
      const result = data
        .map(({ placeName, placeImage, placeCity }) => ({
          placeName, placeImage, placeCity
        }))
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}

exports.getAllCities = (req, res) => { // Assuming categoryName is passed as a query parameter
  Place.getAllCities()
    .then((data) => {
      
      res.send(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}