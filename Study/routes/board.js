// express 설정
const express = require('express');
const { writeArticle } = require('../controllers/boardController');

// boardDB -> boardController 불러오기
const boardDB = require('../controllers/boardController');
// router 설정
const router = express.Router();

// 전체 조회
router.get('/', (req, res) => {
  boardDB.getAllArticles((data) => {
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    res.render('board', { ARTICLE, articleCounts });
  });
});

// 글 작성 칸으로 이동하기.
router.get('/write', (req, res) => {
  res.render('board_write');
});

// 실제 글 작성하기.
router.post('/write', (req, res) => {
  boardDB.writeArticle(req.body, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/board');
    }
  });
});

// // 수정하는 칸으로 이동하기
// router.get('/modify', (req, res) => {
//   res.render('board_modify');
// });
// router exports
module.exports = router;
