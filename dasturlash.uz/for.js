// ====================================( 1 )====================================
const fn1 = (a) => {
  let sum = 0;

  for (let i = 1; i <= a; i++) {
    sum += i;
  }

  return sum;
};

// console.log(fn1(10));
// console.log(fn1(7));

// ====================================( 2 )====================================
const fn2 = (a) => {
  let sum = 0;

  for (let i = 0; i <= a; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
};

// console.log(fn2(10));
// console.log(fn2(7));

// ====================================( 3 )====================================
const fn3 = (a) => {
  let sum = 0;

  for (let i = 0; i <= a; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
};

// console.log(fn3(10));
// console.log(fn3(7));

// ====================================( 4 )====================================
const fn4 = (a) => {
  let sum = 0;

  for (let i = 0; i <= a; i++) {
    if (i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

// console.log(fn4(35));
// console.log(fn4(18));

// ====================================( 5 )====================================
const fn5 = (a) => {
  let count = 0;

  for (let i = 0; i < a; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }

  return count;
};

// console.log(fn5(10));
// console.log(fn5(18));

// ====================================( 6 )====================================
const fn6 = (a, b) => {
  let sum = 0;

  for (let i = a; i < b; i++) {
    sum += i;
  }

  return sum;
};

// console.log(fn6(2, 8));
// console.log(fn6(5, 15));

// ====================================( 7 )====================================
const fn7 = (a, b) => {
  let count = 0;

  for (let i = a; i < b; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }

  return count;
};

// console.log(fn7(4, 15));
// console.log(fn7(24, 31));

// ====================================( 8 )====================================
const fn8 = (a, b) => {
  let yigindi = 0;
  let soni = 0;

  for (let i = a; i < b; i++) {
    if (i % 3 === 0) {
      yigindi += i;
      soni++;
    }
  }

  return { yigindi, soni };
};

// console.log(fn8(4, 15));
// console.log(fn8(24, 32));

// ====================================( 9 )====================================
const fn9 = (a, b) => {
  let count = 0;

  for (let i = a; i < b; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      count++;
    }
  }

  return count;
};

// console.log(fn9(6, 16));
// console.log(fn9(2, 21));

// ====================================( 10 )====================================
const fn10 = (a, b) => {
  let count = 0;

  for (let i = a; i <= b; i++) {
    if (i > 0) {
      count++;
    }
  }

  return count;
};

// console.log(fn10(-1, 10));
// console.log(fn10(-3, 2));

// ====================================( 11 )====================================
const fn11 = (a) => {
  let sum = 1;

  for (let i = 1; i <= 5; i++) {
    sum *= a;
  }

  return sum;
};

// console.log(fn11(2));
// console.log(fn11(4));

// ====================================( 12 )====================================
const fn12 = (a, n) => {
  let sum = 1;

  for (let i = 1; i <= n; i++) {
    sum *= a;
  }

  return sum;
};

// console.log(fn12(2,6));
// console.log(fn12(3,4));

// ====================================( 13 )====================================
const fn13 = (a, n) => {
  if (a >= 1 && a <= 9) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += +a.toString().repeat(i);
    }

    return sum;
  }

  return "1 <= a <= 9";
};

// console.log(fn13(3, 4));
// console.log(fn13(7, 5));

// ====================================( 14 )====================================
const fn14 = (a) => {
  let sum = 0;

  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }

  return a === sum ? true : false;
};

// console.log(fn14(6));
// console.log(fn14(15));

// ====================================( 15 )====================================
const fn15 = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i * i;
  }

  return sum;
};

// console.log(fn15(6));
// console.log(fn15(15));

// ====================================( 16 )====================================
const fn16 = (n) => {
  const original = n;
  let sum = 0;

  for (let i = n; i > 0; i = Math.floor(i / 10)) {
    const digit = i % 10;
    sum += digit * digit * digit;
  }

  return sum === original;
};

// console.log(fn16(153));
// console.log(fn16(256));

// ====================================( 17 )====================================
const fn17 = (n) => {
    for(let i = 1; i <= n; i++) {
        if(i !== 1 && i !== n && n % i === 0) {
            return false
        } 
    }

    return true
}

// console.log(fn17(7));
// console.log(fn17(25));
// console.log(fn17(101));

// ====================================( 18 )====================================
const fn18 = (n) => {
    let result = 0;

    for(let i = n; i > 0; i = Math.floor(i/10)) {
        result++
    }

    return result;
}

// console.log(fn18(121));
// console.log(fn18(25));

// ====================================( 19 )====================================
const fn19 = (n) => {
    let result = 0;
    
    for(let i = n; i > 0; i = Math.floor(i/10)) {
        result += i % 10;
    }

    return result
}

// console.log(fn19(35));
// console.log(fn19(127));

// ====================================( 20 )====================================
const fn20 = (n) => {
    let result = '';

    for(let i = n; i > 0; i = Math.floor(i/10)) {
        const digit = i % 10;
        result += digit;
    }

    return +result
}

// console.log(fn20(12345));
// console.log(fn20(6821));

// ====================================( 21 )====================================
const fn21 = (n) => {
    let sum = '';

    for(let i = n; i > 0; i = Math.floor(i/10)) {
        const digit = i % 10;
        sum += digit;
    }

    return +sum === n
}

// console.log(fn21(12321));
// console.log(fn21(57855));
// console.log(fn21(8402048));

// ====================================( 22 )====================================
const fn22 = (n) => {
    let sum = 1;

    for(let i = 1; i <= n; i++) {
        sum *= i
    }

    return sum
}

// console.log(fn22(5));
// console.log(fn22(10));

// ====================================( 23 )====================================
const fn23 = (n) => {
    if(n <= 0) return 0
    if(n===1) return 0
    if(n===2) return 1

    let f1 = 0, f2 = 1;
    let sum = f1;

    for(let i = 3; i <= n; i++) {
        const next = f1 + f2;
        sum+=next;
        f1 = f2;
        f2 = next
    }
    
    return sum
}

console.log(fn23(15))
console.log(fn23(10))