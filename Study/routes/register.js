const express = require('express');
const router = express.Router();
const loginDB = require('../controllers/loginController');
router.get('/', (req, res) => {
  res.render('register');
});
router.post('/', (req, res) => {
  loginDB.checkID(req.body, (data) => {
    if (data.length === 1) {
      res.send(
        "<script>alert('이미 가입되어있는 아이디입니다.'); window.location.replace('/register');</script>"
      );
    } else {
      loginDB.register(req.body, (result) => {
        if (result.affectedRows >= 1) {
          res.send(
            "<script>alert('회원가입 성공하였습니다.'); window.location.replace('/login');</script>"
          );
        }
      });
    }
  });
});
module.exports = router;
