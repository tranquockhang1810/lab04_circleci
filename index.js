const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from circleCI!');
});

app.get('/users', (req, res) => {
  res.send('Em nộp bài lab04 ạ!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});