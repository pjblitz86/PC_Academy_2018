const express = require('express');
const port = require('./config');

const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Server running on port ${port}`));