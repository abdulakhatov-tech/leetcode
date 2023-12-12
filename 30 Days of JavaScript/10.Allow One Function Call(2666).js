// Given a function fn, return a new function that is identical to the original function
// except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

function once(fn) {
  let fn_call = 0;

  return function (...args) {
    if (fn_call === 1) return undefined;

    fn_call++;

    return fn(...args);
  };
}

const sum = (args) => args.reduce((acc, cur) => acc + cur, 0);
const multiplication = (args) => args.reduce((acc, cur) => acc * cur, 1);

let once_fn = once(multiplication);

console.log(once_fn([5, 7, 4]));
console.log(once_fn([2, 3, 6]));
console.log(once_fn([2, 3, 6]));
console.log(once_fn([2, 3, 6]));
console.log(once_fn([2, 3, 6]));
