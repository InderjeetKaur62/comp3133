var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Middleware for parsing JSON and form data
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Handle POST request
router.post('/', (req, res) => {
    console.log('Received POST request:', req.body);
    res.send('POST received!');
});

module.exports = router;
