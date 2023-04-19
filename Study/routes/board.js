// express 설정
const express = require('express');

// boardDB -> boardController 불러오기
const boardDB = require('../controllers/boardController');
// router 설정
const router = express.Router();

// 로그인 세션 확인하는 미들웨어
const isLogin = (req, res, next) => {
  if (req.session.login) {
    next();
  } else {
    res.send(
      "<script>alert('로그인 해주세요'); window.location.replace('/login');</script>"
    );
  }
};

// 전체 조회
router.get('/', isLogin, (req, res) => {
  boardDB.getAllArticles((data) => {
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    res.render('board', { ARTICLE, articleCounts, userId: req.session.userId });
  });
});

// 글 작성 칸으로 이동하기.
router.get('/write', isLogin, (req, res) => {
  res.render('board_write');
});

// 실제 글 작성하기.
router.post('/write', isLogin, (req, res) => {
  const newArticle = {
    userId: req.session.userId,
    title: req.body.title,
    content: req.body.content,
  };
  boardDB.writeArticle(newArticle, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/board');
    }
  });
});

// 수정 하는 칸으로 이동하기.
router.get('/modify/:id', isLogin, (req, res) => {
  boardDB.getArticle(req.params.id, (data) => {
    const selectedArticle = data[0];
    console.log(selectedArticle);
    res.render('board_modify', { selectedArticle });
  });
});

// 실제로 수정하기 (post)
router.post('/modify/:id', isLogin, (req, res) => {
  console.log('왔음? 수정하는 공간임.');
  boardDB.modifyArticle(req.params.id, req.body, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/board');
    }
  });
});

// 삭제하기(delete)

router.delete('/delete/:id', isLogin, (req, res) => {
  boardDB.deleteArticle(req.params.id, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/board');
    }
  });
});
module.exports = router;
