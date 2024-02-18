var express = require('express')
var router = express.Router()
var placesByFilter = require('../controllers/placesByFilter')

router.get('/', placesByFilter.getPlacesByFilter)

module.exports = router
