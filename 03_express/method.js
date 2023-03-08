// @ts-check

const express = require('express');

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.send('get');
});

app.post('/', (req, res) => {
  res.send('post');
});

app.put('/', (req, res) => {
  res.send('put');
});

app.delete('/', (req, res) => {
  res.send('delete');
});

app.listen(PORT, () => {
  console.log(`SERVER PORT : ${PORT}`);
});
