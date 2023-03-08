const { resolve } = require('path');

const delay = (ms) => {
  return new Promise(
    (resolve,
    (reject) => {
      setTimeout(() => resolve(), ms);
    })
  );
};

async function asyncFunc(value) {
  if (value > 10) {
    return `success : value is ${value}`;
  }
}

async function start() {
  await delay(1000);
  try {
    const promise1 = await asyncFunc(30);
    console.log(promise1);
  } catch (e) {
    console.error(e);
  }
}

start();
