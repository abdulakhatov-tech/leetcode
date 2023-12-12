// Given two promises promise1 and promise2,
// return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

async function addTwoPromises(promise1, promise2) {
  return await Promise.all([promise1, promise2]).then((res) =>
    res.reduce((acc, cur) => acc + cur, 0)
  );
}

// Example promise case 1
const promise1_1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise1_2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// Example promise case 2
const promise2_1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
const promise2_2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

// Example promise case 3
const promise3_1 = Promise.resolve(2);
const promise3_2 = Promise.resolve(2);

addTwoPromises(promise1_1, promise1_2).then((res) => console.log(res));
addTwoPromises(promise2_1, promise2_2).then((res) => console.log(res));
addTwoPromises(promise3_1, promise3_2).then((res) => console.log(res));
