const express = require('express');
const router = express.Router();
const HomeController = require('../controller/home_controller')

router.get('/', HomeController.home );
router.post('/search', HomeController.search )

module.exports = router;