const fn = (n) => {
  let result = "";

  for (let i = n; i > 0; i--) {
    for (let k = i; k > 0; k--) {
      result += "*";
    }
    result += "\n";
  }

  return result;
};

console.log(fn(5));
