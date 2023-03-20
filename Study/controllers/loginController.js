// mysql 연결된 dbConnect 불러오기.
const connection = require('./dbConnect');

// select * from mydb.user where user_id = "zack" and password = "1111"
const loginDB = {
  checkID: (reqBody, cb) => {
    connection.query(
      `select * from mydb.user where USER_ID = '${reqBody.id}';`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
  // insert into user (user_id,password) values("zack8361","paul2858")
  // 삽입.
  register: (reqBody, cb) => {
    connection.query(
      `insert into user(USER_ID,PASSWORD) values ('${reqBody.id}','${reqBody.password}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
};

module.exports = loginDB;
