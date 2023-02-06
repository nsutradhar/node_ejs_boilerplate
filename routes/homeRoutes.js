const express = require('express')
const router = express.Router()

// controller
const home = require('../controllers/home')

router.get('/', home.get)
router.post('/:id', home.post)

module.exports = router