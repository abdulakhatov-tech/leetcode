const myAtoi = (s) => {
  s = s.trim(); // remove leading/trailing spaces

  if (s.length === 0) return 0;

  let i = 0;
  let sign = 1;
  let result = 0;

  // handle optional sign
  if (s[i] === '+' || s[i] === '-') {
    if (s[i] === '-') sign = -1;
    i++;
  }

  // build the number from digits
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
    i++;
  }

  result *= sign;

  // clamp within 32-bit signed integer range
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
};

console.log(myAtoi("42")); // 42
console.log(myAtoi(" -042")); // -42
console.log(myAtoi("1337c0d3")); // 1337
console.log(myAtoi("0-1")); // 0
console.log(myAtoi("-91283472332")); // 0
