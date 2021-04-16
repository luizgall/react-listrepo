const express = require('express');
const router = express.Router();
const controller = require('../controllers/gitUserController.js')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../../swagger.json');




router.get('/search', controller.getRepos);

router.put('/star', controller.putStar);
router.post('/delete-star', controller.deleteStar);

router.use('/doc', swaggerUi.serve);
router.get('/doc', swaggerUi.setup(swaggerDocument));

module.exports = router;