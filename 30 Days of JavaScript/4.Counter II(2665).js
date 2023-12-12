// Write a function createCounter. It should accept an initial integer init. It should return
// an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter(init) {
  let initialValue = init;
  return {
    increment() {
      initialValue++;
      return initialValue;
    },
    decrement() {
      initialValue--;
      return initialValue;
    },
    reset() {
      initialValue = init;
      return initialValue;
    },
  };
}

let fn = createCounter(10);

console.log(fn.increment());
console.log(fn.increment());
console.log(fn.increment());
console.log(fn.increment());
console.log(fn.reset());
console.log(fn.decrement());
console.log(fn.decrement());
