// Given a function fn, an array of arguments args, and an interval time t,
// return a cancel function cancelFn.

// The function fn should be called with args immediately and then called again every
// t milliseconds until cancelFn is called at cancelTimeMs ms.

function cancellable(fn, args, t) {
  fn(...args);

  let intervalId = setInterval(() => fn(...args), t);

  const cancel = () => clearInterval(intervalId);

  return cancel;
}

// Example - 1
// const result = [];
// const fn = (x) => x * 2;
// const args = [4],
//   t = 35,
//   cancelTimeMs = 190;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancelFn = cancellable(log, args, t);

// setTimeout(cancelFn, cancelTimeMs);

// setTimeout(() => {
//   console.log(result);
// }, cancelTimeMs + 50);

// Example - 2
// const result = [];
// const fn = (x1, x2) => x1 * x2;
// const args = [2, 5],
//   t = 30,
//   cancelTimeMs = 165;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancelFn = cancellable(log, args, t);

// setTimeout(cancelFn, cancelTimeMs);

// setTimeout(() => {
//   console.log(result);
// }, cancelTimeMs + 50);

// Example - 3
const result = [];
const fn = (x1, x2, x3) => x1 + x2 + x3;
const args = [5, 1, 3],
  t = 50,
  cancelTimeMs = 180;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancelFn = cancellable(log, args, t);

setTimeout(cancelFn, cancelTimeMs);

setTimeout(() => {
  console.log(result);
}, cancelTimeMs + 50);
