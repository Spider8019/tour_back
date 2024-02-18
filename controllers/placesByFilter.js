const Place = require('../models/attractions')

exports.getPlacesByFilter = (req, res) => { // Assuming categoryName is passed as a query parameter
    Place.getPlacesByProvidedFilter(req.query)
      .then((data) => {
        const result = data
          .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
        res.send(result)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Internal Server Error' + err)
      })
  }