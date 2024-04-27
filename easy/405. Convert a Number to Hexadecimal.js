function toHex(num) {
  if (num === 0) return '0';

  if (num < 0) {
    // For negative numbers, compute the two's complement representation
    num = 0xffffffff + num + 1;
  }

  return num.toString(16);
}

// let result = toHex(26);`
let result = toHex(-1);
console.log(result);
