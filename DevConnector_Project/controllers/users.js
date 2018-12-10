const User = require('../models/User');
const validateRegisterInput = require('../validation/register');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const validateLoginInput = require('../validation/login');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

exports.current = function (req, res) {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
};

exports.register = function (req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // size
          r: 'pg', // rating
          d: 'mm' // default
        });
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => res.status(404).json(err));
};

exports.login = function (req, res) {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, name: user.name, avatar: user.avatar };
            jwt.sign(
              payload,
              keys.JWT_SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: 'true',
                  token: 'Bearer ' + token
                });
              });
          } else {
            errors.password = 'Password incorrect';
            return res.status(400).json(errors);
          }
        });
    })
    .catch(err => res.status(404).json(err));
};

