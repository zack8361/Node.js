// ES6 방식 -> 선언부 앞에 Export 사용하기
// 필요한것만 Export 해라 는 식으로 바뀜

const animals = ['dog', 'cat'];

function showAnimals() {
  animals.map((el) => console.log(el));
}

// ES6은 바뀜
export { animals, showAnimals };
