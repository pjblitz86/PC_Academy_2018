const express = require('express');
const router = express.Router();
const passport = require('passport');
const profileController = require('../controllers/profile');

router.get('/test', profileController.test);

router.get('/current', passport.authenticate('jwt', { session: false }), profileController.getCurrentProfile);

router.get('/all', profileController.getAllProfiles);

router.get('/handle/:handle', profileController.getProfileByHandle);

router.get('/user/:user_id', profileController.getProfileByUserId);

router.post('/createoredit', passport.authenticate('jwt', { session: false }), profileController.createNewOrEditProfile);

router.post('/experience', passport.authenticate('jwt', { session: false }), profileController.addExperience);

router.post('/education', passport.authenticate('jwt', { session: false }), profileController.addEducation);

router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), profileController.deleteExperience);

router.delete('/education/:edu_id', passport.authenticate('jwt', { session: false }), profileController.deleteEducation);

router.delete('/', passport.authenticate('jwt', { session: false }), profileController.deleteProfileAndUser);

module.exports = router;