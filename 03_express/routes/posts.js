const express = require('express');

const Router = express.Router();

const BOARD = [
  {
    title: '이찬호',
    content: '멋쟁이',
  },
  {
    title: '최두로',
    content: '멋쟁이',
  },
];
// localhost:4000/posts 부터 시작.
Router.get('/', (req, res) => {
  const boardCounts = BOARD.length;
  res.render('posts', { BOARD, boardCounts });
});

// localhost:4000/posts/add 부터 시작
Router.post('/add', (req, res) => {
  // req.body 의 키값이 1개이상일 경우 if 문 아래 실행.
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newUser = {
        title: req.body.title,
        content: req.body.content,
      };
      BOARD.push(newUser);
      res.redirect('/posts');
    }
  }
});

module.exports = Router;
