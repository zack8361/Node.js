// express 똑같이 선언
const express = require('express');

const router = express.Router();

// 메인 화면 -> localhost:4000/
// url 로 넘어오면 main.ejs 랜딩.
router.get('/', (req, res) => {
  res.render('main.ejs');
});

module.exports = router;
