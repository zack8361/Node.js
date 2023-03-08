const multiplication = (number, callback) => {
  let answer = 0;
  console.log('계산 시작');
  setTimeout(() => {
    answer = number * number;
    callback(answer);
  }, 2000);
};

const say = (result) => {
  console.log(result);
};

multiplication(3, say);
