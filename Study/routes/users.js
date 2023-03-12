// express 설정.
const { render } = require('ejs');
const express = require('express');

// router 설정.
const router = express.Router();

// 배열 설정.
const users = [
  {
    name: '이찬호',
  },
  {
    name: '공희진',
  },
];

// 회원 조회
router.get('/', (req, res) => {
  const usersCount = users.length;
  res.render('users.ejs', { usersCount, users });
});

// 회원 추가
router.post('/add', (req, res) => {
  console.log('추가');
  if (req.body) {
    const newUser = {
      name: req.body.name,
    };
    users.push(newUser);
    res.redirect('/users');
  }
});

// 회원 삭제
router.delete('/delete/:name', (req, res) => {
  res.redirect('/users');
});
module.exports = router;
