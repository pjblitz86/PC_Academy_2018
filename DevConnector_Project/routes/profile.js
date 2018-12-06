const express = require('express');
const router = express.Router();
const passport = require('passport');
const Profile = require('../models/Profile');
const validateExperienceInput = require('../validation/experience');
const validateEducationInput = require('../validation/education');
const User = require('../models/User');
const profileController = require('../controllers/profile');

router.get('/test', profileController.test);

router.get('/current', passport.authenticate('jwt', { session: false }), profileController.current);

router.get('/all', profileController.all);

router.get('/handle/:handle', (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

router.get('/user/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

router.post('/createoredit', passport.authenticate('jwt', { session: false }), profileController.createoredit);

router.post('/experience', passport.authenticate('jtw', { session: false }), (req, res) => {
  const { errors, isValid } = validateExperienceInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      profile.experience.unshift(newExp);
      profile.save().then(profile => res.json(profile));
    });
});

router.post('/education', passport.authenticate('jtw', { session: false }), (req, res) => {
  const { errors, isValid } = validateEducationInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      profile.education.unshift(newEdu);
      profile.save().then(profile => res.json(profile));
    });
});

router.delete('/experience/:exp_id', passport.authenticate('jtw', { session: false }), (req, res) => {

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      const removeIndex = profile.experience
        .map(item => item.id)
        .indexOf(req.params.exp_id);

      profile.experience.splice(removeIndex, 1);
      profile.save().then(profile => res.json(profile));
    })
    .catch(err => res.status(404).json(err));
});

router.delete('/education/:edu_id', passport.authenticate('jtw', { session: false }), (req, res) => {

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(req.params.edu_id);

      profile.education.splice(removeIndex, 1);
      profile.save().then(profile => res.json(profile));
    })
    .catch(err => res.status(404).json(err));
});

router.delete('/', passport.authenticate('jtw', { session: false }), (req, res) => {

  Profile.findOneAndRemove({ user: req.user.id })
    .then(() => {
      User.findOneAndRemove({ _id: req.user.id })
        .then(() => res.json({ succes: true }));
    });
});

module.exports = router;