// Vacation 클래스.

// class Vacation {
//   constructor(destination, length) {
//     this.destination = destination;
//     this.length = length;
//   }
//   print() {
//     console.log(`${this.destination} 는 ${this.length} 입니다..`);
//   }
// }

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`당신의 ${this.gear}`);
  }
}
const trip = new Expedition('한라산', (3)[('선글라스', '오색깃발')]);
trip.print();
