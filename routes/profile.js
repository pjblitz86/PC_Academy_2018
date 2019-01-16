const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const secureRoute = require('../config/passport').secure;

router.get('/test', profileController.test);

router.get('/current', secureRoute, profileController.getCurrent);

router.get('/all', profileController.getAll);

router.get('/handle/:handle', profileController.getByHandle);

router.get('/user/:user_id', profileController.getByUserId);

router.post('/createoredit', secureRoute, profileController.createNewOrEdit);

router.post('/experience', secureRoute, profileController.addExperience);

router.post('/education', secureRoute, profileController.addEducation);

router.delete('/experience/:exp_id', secureRoute, profileController.deleteExperience);

router.delete('/education/:edu_id', secureRoute, profileController.deleteEducation);

router.delete('/', secureRoute, profileController.deleteProfileAndUser);

module.exports = router;