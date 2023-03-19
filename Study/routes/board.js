// express 설정
const express = require('express');

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

// 수정 하는 칸으로 이동하기.
router.get('/modify/:id', (req, res) => {
  boardDB.getArticle(req.params.id, (data) => {
    const selectedArticle = data[0];
    console.log(selectedArticle);
    res.render('board_modify', { selectedArticle });
  });
});

// 실제로 수정하기 (post)
router.post('/modify/:id', (req, res) => {
  console.log('왔음? 수정하는 공간임.');
  boardDB.modifyArticle(req.params.id, req.body, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/board');
    }
  });
});

// 삭제하기(delete)

router.delete('/delete/:id', (req, res) => {
  boardDB.deleteArticle(req.params.id, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/board');
    }
  });
});
module.exports = router;
