const Place = require('../models/attractions')

exports.getAPlace = (req, res) => {
  Place.getPlaceByName(placeName=req.query.placeName)
    .then((data) => {
        // console.log(data)
    //   const result = data
    //     .filter((item) => item.placeCity == req.query.cityName)
    //     .map(({ placeName, placeImage }) => ({ placeName, placeImage }))
      res.send(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' +err)
    })
}