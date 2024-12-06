const fn = (n) => {
  let result = "";

  for (let i = 0; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      result += k;
    }
    result += "\n";
  }

  return result;
};

console.log(fn(5));
