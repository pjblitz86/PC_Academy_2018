const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const passport = require('passport');

router.get('/current', passport.authenticate('jwt', { session: false }), userController.current);

router.post('/register', userController.register);

router.post('/login', userController.login);

module.exports = router;