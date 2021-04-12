const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node  API",
        version: "1.0"
    });
});
module.exports = router;