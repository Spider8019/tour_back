var express = require('express')
var router = express.Router()
var placeFromACity = require('../controllers/placeFromACity')

router.get('/', placeFromACity.getAPlace)

module.exports = router
