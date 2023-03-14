const express = require('express');

const router = express.Router();

const loginDB = require('../controllers/loginController');
// 로그인 창 띄우기(get)
router.get('/', (req, res) => {
  res.render('login');
});

// 로그아웃 처리하기
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  });
});
// 로그인 처리하기(post)
router.post('/', (req, res) => {
  loginDB.checkID(req.body, (data) => {
    if (data.length >= 1) {
      if (req.body.password === data[0].PASSWORD) {
        // 만약 비번까지 일치하여 로그인에 성공하였을때 세션 만들어주기.
        req.session.login = true;
        req.session.userId = req.body.id;
        console.log(req.session);
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
