// ------------------------------ 1 ------------------------------
const createCounter = () => {
  let count = 1;

  return () => count++;
};

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// ------------------------------ 2 ------------------------------
const multiplyBy = (n1) => (n2) => n1 * n2;

// const double = multiplyBy(2);
// console.log(double(5)); // 10
// console.log(double(50)); // 10

// ------------------------------ 3 ------------------------------
const once = (fn) => {
  let count = false;

  return () => {
    if (!count) {
      fn();
      count = true;
    } else {
      console.log("Nothing happens");
    }
  };
};

// const init = once(() => console.log("Initialized"));
// init(); // "Initialized"
// init(); // (nothing happens)

// ------------------------------ 4 ------------------------------
const createCounter2 = (n) => {
  let sum = 0;

  return () => (sum += n);
};
// const counter = createCounter2(3);
// console.log(counter()); // 3
// console.log(counter()); // 6

// ------------------------------ 5 ------------------------------

const memoize = (fn) => {
  const map = new Map();

  return function (num) {
    if (!map.has(num)) {
      map.set(num, fn(num));
    }

    return map.get(num);
  };
};

const slowFunction = (num) => {
  console.log("Processing...");
  return num * 2;
};

// const memoized = memoize(slowFunction);
// console.log(memoized(5)); // "Processing..." 10
// console.log(memoized(5)); // 10 (cached, no "Processing...")
// ------------------------------ 6 ------------------------------
const eventEmitter = () => {
  const map = new Map();

  return {
    on: (event, fn) => {
      if (!map.has(event)) {
        map.set(event, fn);
      }
    },
    emit: (event, message) => {
      map.get(event)(message);
    },
  };
};

const emitter = eventEmitter();

// emitter.on("data", (msg) => console.log(msg));
// emitter.emit("data", "Hello"); // Hello

// ------------------------------ 7 ------------------------------
const customSetTimeout = (fn, delay) => {
  setTimeout(fn, delay);
};

// customSetTimeout(() => console.log('Hi'), 100)
// ------------------------------ 8 ------------------------------
const debounce = (fn, delay) => {
  return () => setTimeout(fn, delay);
};

const debounceFn = debounce(() => console.log("Fired"), 500);

// debounceFn()
// debounceFn()
// ------------------------------ 9 ------------------------------
function rateLimit(fn, calls, timeFrame) {
  let timestamps = []; // Array to store the timestamps of function calls

  return function () {
    const now = Date.now(); // Current time in milliseconds

    // Remove timestamps that are outside the current timeframe
    timestamps = timestamps.filter((timestamp) => now - timestamp < timeFrame);

    // Check if we have exceeded the call limit
    if (timestamps.length < calls) {
      fn(); // Execute the function if within limit
      timestamps.push(now); // Add the current time to the timestamps array
    } else {
      console.log("Rate limit exceeded. Try again later.");
    }
  };
}

const limited = rateLimit(() => console.log("Run"), 2, 1000);
// limited()
// limited();
// limited();
// limited();
// limited();

// ------------------------------ 10 ------------------------------
const sum = (n1) => {
  let sum = n1 || 0;

  if (!n1) {
    return sum;
  }

  return function inner(n2) {
    if (!n2) {
      return sum;
    }

    sum += n2;

    return inner;
  };
};

// console.log(sum()); // 6
// console.log(sum(1)()); // 6
// console.log(sum(1)(2)()); // 6
// console.log(sum(1)(2)(3)()); // 6
// console.log(sum(2)(4)(6)(8)()); // 20

// ------------------------------ 11 ------------------------------
const counter = (n) => {
  return function () {
    return --n;
  };
};

// const c = counter(3);
// console.log(c()); // 2
// console.log(c()); // 1
// console.log(c()); // 0

// ------------------------------ 12 ------------------------------
const memoize2 = (fn, expireTime) => {
  const map = new Map();

  return function (num) {
    if (!map.has(num)) {
      map.set(num, fn(num));
      setTimeout(() => map.delete(num), expireTime);
    }

    return map.get(num);
  };
};

const slowFunction2 = (num) => {
  console.log("Processing...");
  return num * 2;
};

const memoized2 = memoize2(slowFunction2, 5000);

// console.log(memoized2(5))
// console.log(memoized2(5))

// ------------------------------ 13 ------------------------------
const partial = (fn, num1) => {
  return (num2) => fn(num1, num2);
};

const add = (a, b) => a + b;
const addFive = partial(add, 5);
// console.log(addFive(3)); // 8

// ------------------------------ 14 ------------------------------
class EventEmitter {
  constructor() {
    this.map = new Map();
  }

  on(event, fn) {
    if (!this.map.has(event)) {
      this.map.set(event, fn);
    }
  }

  emit(event, msg) {
    return this.map.get(event)(msg);
  }
}

const emitter2 = new EventEmitter();
// emitter2.on("data", (msg) => console.log(msg));
// emitter2.emit("data", "Hello!"); // "Hello!"

// ------------------------------ 15 ------------------------------
const poll = (fn, interval, timeout) => {
  const intervalLink = setInterval(fn, interval);

  setTimeout(() => clearInterval(intervalLink), timeout);
};

// poll(() => console.log('Hello'), 1000, 9000)

// ------------------------------ 16 ------------------------------
function findNumb(arr) {
  const obj = {};

  arr.forEach((item) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

// console.log(findNumb([1,1,1,4,1,1,1,3,3,3]))

// ------------------------------ 17 ------------------------------
const curry = (fn) => {
  return function (n1) {
    return function (n2) {
      return function (n3) {
        return fn(n1, n2, n3);
      };
    };
  };
};

// const add2 = curry((a, b, c) => a + b + c);
// console.log(add2(2)(3)(4)); // 9

// ------------------------------ 18 ------------------------------
const deepClone = (data) => {
  const obj = {};

  return function () {};
};

const user = {
  name: "Jack",
  address: {
    street: "Beruniy",
  },
  getName() {
    console.log(this.name);
  },
};

const obj = deepClone(user);

// ------------------------------ 18 ------------------------------
const partial2 = (fn, num1) => {
  return function (num2, num3) {
    return fn(num1, num2, num3);
  };
};

const multiply = (a, b, c) => a * b * c;

const partialMultiply = partial2(multiply, 2);

// console.log(partialMultiply(3,4))

// ------------------------------ 19 ------------------------------
const compose = (...fns) => {
  return function (num) {
    return fns.reduceRight((acc, fn) => fn(acc), num);
  };
};

const add1 = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const composed = compose(add1, double, square);

// console.log(composed(5));

// ------------------------------ 20 ------------------------------
const deepMerge = (obj1, obj2) => {
  const newObj = {};

  for (let key in obj1) {
    if (newObj[key]) newObj[key] = obj1[key];
    console.log(key, obj1[key]);
  }
};

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 } };
console.log(deepMerge(obj1, obj2));
// { a: 1, b: { c: 2, d: 3 } }
