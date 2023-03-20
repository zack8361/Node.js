const express = require('express');
const router = express.Router();

const loginDB = require('../controllers/loginController');
// 로그인 창 띄우기(get)
router.get('/', (req, res) => {
  res.render('login');
});

// 로그인 처리하기(post)
router.post('/', (req, res) => {
  loginDB.checkID(req.body, (data) => {
    if (data.length >= 1) {
      if (req.body.password === data[0].PASSWORD) {
        res.redirect('board');
      } else {
        res.send(
          "<script>alert('비밀번호를 확인하시오'); window.location.replace('/login');</script>"
        );
      }
    } else {
      res.send(
        "<script>alert('아이디를 확인하시오'); window.location.replace('/login');</script>"
      );
    }
  });
});

module.exports = router;
