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