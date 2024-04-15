var express = require('express')
var router = express.Router()
var rentalGaadiController = require('../controllers/rentals/gaadi')

router.get('/', rentalGaadiController.getAllGaadiCategoryInACity)
router.post('/insert', rentalGaadiController.addAGaadi)

module.exports = router
