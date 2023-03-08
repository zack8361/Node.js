const promise = new Promise((resolve, reject) => {
  const tetz = 'old';
  if (tetz === 'old') {
    setTimeout(() => {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('아직 어리다');
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
