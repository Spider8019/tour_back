const Place = require('../models/attractions')
const readJsonFromGithub = require('../helpers/readJsonFromGithub')

exports.getPlacesByFilter = (req, res) => {
  // Assuming categoryName is passed as a query parameter
  Place.getPlacesByProvidedFilter(req.query)
    .then((data) => {
      const result = data.map(({ placeName, placeImage, placeCity }) => ({
        placeName,
        placeImage,
        placeCity,
      }))
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}

exports.getTopSearches = (req, res) => {
  // Assuming categoryName is passed as a query parameter
  const limit = req.query.limit ? parseInt(req.query.limit) : 10
  Place.getTopSearches(limit)
    .then((data) => {
      const result = data.map(
        ({ placeName, placeImage, placeCity, placeVisit }) => ({
          placeName,
          placeImage,
          placeCity,
          placeVisit,
        }),
      )
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}

exports.getLatestPlaces = (req, res) => {
  // Assuming categoryName is passed as a query parameter
  const limit = req.query.limit ? parseInt(req.query.limit) : 10
  Place.getLatestPlaces(limit)
    .then((data) => {
      const result = data.map(({ placeName, placeImage, placeCity }) => ({
        placeName,
        placeImage,
        placeCity,
      }))
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}

exports.getAllCities = (req, res) => {
  // Assuming categoryName is passed as a query parameter
  Place.getAllCities()
    .then((data) => {
      const url =
        'https://raw.githubusercontent.com/Spider8019/json_config/master/cities.json'

      readJsonFromGithub(url).then((jsondata) => {
        if (jsondata) {
          console.log('JSON data:', jsondata)
          // Process the JSON data here
          const cityArray = Object.keys(jsondata).map((city) => ({
            city,
            ...jsondata[city],
          }))

          const result = {
            tier1: cityArray.filter((cityObj) =>
              data.tier1.includes(cityObj.city),
            ),
            tier2: cityArray.filter((cityObj) =>
              data.tier2.includes(cityObj.city),
            ),
            tier3: cityArray.filter((cityObj) =>
              data.tier3.includes(cityObj.city),
            ),
          }
          console.log(result)
          res.send(result)

          // res.send(result)
        }
      })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}
