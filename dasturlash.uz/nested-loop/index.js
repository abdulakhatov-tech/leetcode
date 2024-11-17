const fn = (n) => {
  let sum = "";

  for (let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(i === 0) {
            sum += `${j + i * 10}   `
        } else {
            sum += `${j + i * 10}  `
        }
    }
    sum += '\n'
  }

  return sum;
};

console.log(fn(10));
