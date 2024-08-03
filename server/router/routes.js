const express = require('express')
const { home, contact } = require('../controllers/controllers')
const router = express.Router();

// Define a route for the root path '/' with a GET request, handled by the 'home' controller function
router.route('/').get(home);

// Define a route for the path '/register' with a POST request, handled by the 'register' controller function
router.route('/contact').post(contact);


module.exports = router;