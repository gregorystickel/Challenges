// Write your code below this line.

let n = 10; //n equals number of unique numbers to generate

// generate random unique number
function randomNum(range, outputCount) {
  let arr = [];
  for (let i = 1; i <= range; i++) {
    arr.push(i);
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}

console.log(randomNum(10, n));
