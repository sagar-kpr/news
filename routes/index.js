const express = require('express');
const router = express.Router();
const HomeController = require('../controller/home_controller')

router.get('/', HomeController.home );

module.exports = router;