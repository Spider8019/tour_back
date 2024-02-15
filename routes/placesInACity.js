var express = require('express')
var router = express.Router()
var placesInACityController = require('../controllers/placesInACity')

router.get('/', placesInACityController.getAllPlacesInACity)
router.post('/insert', placesInACityController.addAPlacesInACity)

module.exports = router
