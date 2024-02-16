var express = require('express')
var router = express.Router()
var placesByCategory = require('../controllers/placesByCategory')

router.get('/', placesByCategory.getPlacesByCategory)

module.exports = router
