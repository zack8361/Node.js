const { time } = require('console');
const { setDefaultResultOrder } = require('dns');

const knockDoor = (time, name, callback) => {
  console.log('노크를 하고 기다립니다!');
  setTimeout(() => {
    callback(time, name);
  }, 1000 * time);
};

const callName = (time, name) => {
  console.log(`${name} 이가 ${time} 만에 문을 열고 나왔습니다.`);
};
knockDoor(3, '영식', callName);
