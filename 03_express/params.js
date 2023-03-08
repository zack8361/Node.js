// @ts-check

const express = require('express');

const PORT = 4000;
const app = express();

app.get('/id/:id/password/:password', (req, res) => {
  res.send(req.params);
  console.log(req.params);
});

app.get('/', (req, res) => {
  res.send(req.query);
  console.log(req.query);
});

app.listen(PORT, () => {
  console.log(`현재포트 두루미 ${PORT}`);
});
