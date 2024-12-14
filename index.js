const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from circleCI!');
});

app.get('/users', (req, res) => {
  res.send('Hello Khang!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});