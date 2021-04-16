const express = require('express');
const router = express.Router();
const controller = require('../controllers/gitUserController.js')

router.get('/search', controller.getRepos);
router.put('/star', controller.putStar);
router.post('/delete-star', controller.deleteStar);


module.exports = router;