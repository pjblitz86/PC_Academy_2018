const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const port = process.env.PORT || 5000;
const profile = require('./routes/profile');
const posts = require('./routes/posts');
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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;