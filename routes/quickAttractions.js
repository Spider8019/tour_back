var express = require('express')
var router = express.Router()
var quickAttractions = require('../controllers/quickAttractions')

router.get('/', quickAttractions.getAllQuickAttractions)
router.post("/insert",quickAttractions.createQuickAttractions)

module.exports = router
