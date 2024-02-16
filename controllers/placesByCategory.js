const Place = require('../models/attractions')

exports.getPlacesByCategory = (req, res) => {
    const category = req.query.categoryName; // Assuming categoryName is passed as a query parameter
    Place.getAllData()
      .then((data) => {
        const result = data
          .filter((item) => item.placeCategory == category)
          .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
        res.send(result)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Internal Server Error' + err)
      })
  }