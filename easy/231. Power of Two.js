function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

let result = isPowerOfTwo(4);
console.log(result);

let result2 = isPowerOfTwo(5);
console.log(result2);
