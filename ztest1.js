const func = (value) => {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      resolve(`Success : value is${value}`);
    } else {
      reject(new Error(`${value} not enough`));
    }
  });
};

const start = () => {
  console.log('시작');
  setTimeout(() => {
    const promise1 = func(30);
    promise1
      .then((msg) => console.log(msg))
      .catch((error) => console.log(error));

    const promice2 = func(5);
    promice2
      .then((msg) => console.log(msg))
      .catch((error) => console.log(error));
  }, 1000);
};
start();
