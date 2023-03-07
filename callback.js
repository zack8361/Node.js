// @ts-check
const buySync = (item, price, quantity, callback) => {
  console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다.`);
  console.log('계산이 필요합니다');
  setTimeout(() => {
    const total = price * quantity;
    callback(total);
  }, 3000);
};

const pay = (total) => {
  console.log(`${total} 원을 지불하였습니다.`);
};

buySync('포켓몬빵', 1000, 5, pay);
