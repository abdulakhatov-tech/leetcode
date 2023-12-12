// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
// It can resolve any value.

async function sleeps(millis) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

let t = Date.now();
sleeps(100).then(() => console.log(Date.now() - t)); // 100
