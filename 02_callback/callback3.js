const multiplication = (number, callback) => {
  let answer = 0;
  console.log('ęłě° ěě');
  setTimeout(() => {
    answer = number * number;
    callback(answer);
  }, 2000);
};

const say = (result) => {
  console.log(result);
};

multiplication(3, say);
