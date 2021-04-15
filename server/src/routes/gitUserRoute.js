const express = require('express');
const router = express.Router();
const controller = require('../controllers/gitUserController.js')

router.get('/search', controller.getRepos);


module.exports = router;