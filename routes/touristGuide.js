var express = require('express')
var router = express.Router()
var touristGuideController = require('../controllers/touristGuide')

router.get('/', touristGuideController.getAllTouristGuides)
router.post('/insert', touristGuideController.createTouristGuides)

module.exports = router
