function mySqrt(x) {
  if (x < 0) {
    return false;
  }

  let res = Math.floor(Math.sqrt(x));

  return res;
}

let result = mySqrt(4);

console.log(result);
