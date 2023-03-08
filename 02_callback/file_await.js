const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('readme1.txt');
  console.log(`1번 ${data}`);
  data = await fs.readFile('readme2.txt');
  console.log(`2번 ${data}`);
}
main();
