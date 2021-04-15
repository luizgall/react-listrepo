const express = require('express');
const router = express.Router();
const controller = require('../controllers/gitUserController.js')

router.get('/search', controller.getRepos);
router.post('/star', controller.putStar);



module.exports = router;