var express = require('express')
var router = express.Router()
var eventController = require('../controllers/events')

router.get('/', eventController.getAllEventsInACity)
router.post('/insert', eventController.addAEvent)

module.exports = router
