const express = require('express');
const router = express.Router();
const { register, login } = require('./auth'); // Adjust path as necessary

// Include middleware to parse JSON
router.use(express.json());

router.route('/register').post(register);
router.route("/login").post(login);

module.exports = router;
