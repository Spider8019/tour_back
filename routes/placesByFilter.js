var express = require('express')
var router = express.Router()
var placesByFilter = require('../controllers/placesByFilter')

router.get('/', placesByFilter.getPlacesByFilter)
router.get('/topsearches',placesByFilter.getTopSearches)
router.get('/latestplaces',placesByFilter.getLatestPlaces)

module.exports = router
