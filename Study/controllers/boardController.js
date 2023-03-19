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
      `insert into mydb.board (TITLE,CONTENT) values ('${body.title}','${body.content}')`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
  // 글 수정 이동 으로 위해 -> 특정 id 값을 갖는 게시글 찾기.
  getArticle: (id, cb) => {
    connection.query(
      `select * from mydb.board where ID_PK = ${id};`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
  // 특정 id 값을 가지는 게시글을 수정 기능
  modifyArticle: (paramsId, reqBody, cb) => {
    connection.query(
      `UPDATE mydb.board SET TITLE = '${reqBody.title}',CONTENT = '${reqBody.content}' WHERE ID_PK = '${paramsId}'`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
  // 특정 id 값을 가지는 게시글을 삭제 하는 기능
  deleteArticle: (paramsId, cb) => {
    connection.query(
      `DELETE FROM mydb.board WHERE ID_PK = '${paramsId}'`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
};
module.exports = boardDB;
