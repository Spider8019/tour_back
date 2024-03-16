const Place = require('../models/attractions')

exports.getAPlace = (req, res) => {
  Place.getPlaceByName((placeName = req.query.placeName))
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' + err)
    })
}
