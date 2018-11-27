const express = require('express');
const port = require('./config/port');
const mongoose = require('mongoose');

const app = express();

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello!!!'));

app.listen(port, () => console.log(`Server running on port ${port}`));