// mysql 연결된 dbConnect 불러오기.
const connection = require('./dbConnect');

const boardDB = {
  // 모든 게시글 가져오기 기능.
  getAllArticles: (cb) => {
    connection.query('SELECT * FROM mydb.board', (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  // 글 쓰기.
  writeArticle: (body, cb) => {
    connection.query(
      `INSERT INTO mydb.board (TITLE,CONTENT) values ('${body.title}', '${body.content}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
};
module.exports = boardDB;
