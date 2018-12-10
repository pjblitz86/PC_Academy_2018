const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const profile = require('./routes/profile');
const posts = require('./routes/posts');
const port = require('./config/port');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const mongoDBConnectionString = require('./config/keys').CONNECTION_STRING;
const mongoDBConnectionTest = require('./config/keys').CONNECTION_STRING_TEST;


if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
  mongoose.connect(mongoDBConnectionTest, { useNewUrlParser: true });
} else {
  mongoose
    .connect(mongoDBConnectionString, { useNewUrlParser: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));
}

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/profile', profile);
app.use('/posts', posts);

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;