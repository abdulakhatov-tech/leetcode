// ====================================( 1 )====================================
const fn1 = (n) => {
  if (n > 10) {
    return n + 3;
  } else if (n < 10) {
    return n * 2;
  } else {
    return 22;
  }
};

// console.log(fn1(15));
// console.log(fn1(8));
// console.log(fn1(10));

// ====================================( 2 )====================================
const fn2 = (a) => {
  let count = 0;

  while (a >= 3) {
    a -= 3;
    count++;
  }

  return count;
};

// console.log(fn2(7));
// console.log(fn2(9));

// ====================================( 3 )====================================
const fn3 = (a) => {
  while (a >= 3) {
    a -= 3;
  }

  return a;
};

// console.log(fn3(7));
// console.log(fn3(8));

// ====================================( 4 )====================================
const fn4 = (n) => {
  if (n % 2 === 0) {
    return "juft";
  } else {
    return "toq";
  }
};

// console.log(fn4(4));
// console.log(fn4(7));
// console.log(fn4(18));

// ====================================( 5 )====================================
const fn5 = (a, b) => {
  if (a > b) return a;

  return b;
};

// console.log(fn5(4, 7))
// console.log(fn5(9, 3))

// ====================================( 6 )====================================
const fn6 = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

// console.log(fn6(4,7,5))
// console.log(fn6(9,3,10))
// console.log(fn6(5,1, 4))

// ====================================( 7 )====================================
const fn7 = (a) => (a > 0 ? "mustbat" : a < 0 ? "manfiy" : 0);

// console.log(fn7(4));
// console.log(fn7(-5));
// console.log(fn7(0));

// ====================================( 8 )====================================
// const fn8 = (a) => a % 5 === 0 ? true : false;
const fn8 = (a) => {
  while (a >= 5) {
    a -= 5;
  }

  if (a > 0) {
    return false;
  }

  return true;
};

// console.log(fn8(10));
// console.log(fn8(7));

// ====================================( 9 )====================================
const fn9 = (n) => (n % 12 === 0 ? true : false);

// console.log(fn9(14));
// console.log(fn9(24));

// ====================================( 10 )====================================
const fn10 = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }

  return false;
};

// console.log(fn10(2000));
// console.log(fn10(2041));

// ====================================( 11 )====================================
const fn11 = (c) => {
  if (Number.isInteger(c)) {
    return "son";
  } else {
    return "alpha";
  }
};

// console.log(fn11('a'));
// console.log(fn11(2));

// ====================================( 12 )====================================
const fn12 = (c) => {
  if (String(c).charCodeAt(0) >= 65 && String(c).charCodeAt(0) <= 90) {
    return "uppercase";
  } else if (String(c).charCodeAt(0) >= 97 && String(c).charCodeAt(0) <= 122) {
    return "lowercase";
  } else {
    return "none";
  }
};

// console.log(fn12('a'));
// console.log(fn12(2));
// console.log(fn12('B'));

// ====================================( 13 )====================================
const fn13 = (n) => {
  const weekDays = {
    0: "Yakshanba",
    1: "Dushanba",
    2: "Seshanba",
    3: "Chorshanba",
    4: "Payshanba",
    5: "Juma",
    6: "Shanba",
  };

  if (n >= 0 && n <= 6) {
    return weekDays[n];
  }

  return "Bunday hafta kuni yo'q.";
};

// console.log(fn13(1))
// console.log(fn13(6))
// console.log(fn13(0))

// ====================================( 14 )====================================
const fn14 = (a, b, c) => {
  if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
    return true;
  }

  return false;
};

// console.log(fn14(30, 20, 130));
// console.log(fn14(10, 180, 20));

// ====================================( 15 )====================================
const fn15 = (a, b, c) => {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  }

  return false;
};

// console.log(fn15(20, 25, 30));
// console.log(fn15(120, 10, 20));

// ====================================( 16 )====================================
const fn16 = (a, b, c) => {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

// console.log(fn16(10, 15, 10))
// console.log(fn16(23, 10, 15))

// ====================================( 17 )====================================
const fn17 = (a, b, c) => {
  let count = 0;

  if (a > 0) {
    count++;
  }

  if (b > 0) {
    count++;
  }

  if (c > 0) {
    count++;
  }

  return count;
};

// console.log(fn17(1, 8, 27));
// console.log(fn17(-2, 10, -9));

// ====================================( 18 )====================================
const fn18 = (a, b) => {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else {
    return "teng";
  }
};

// console.log(fn18(1, 8));
// console.log(fn18(10, -9));

// ====================================( 19 )====================================
const fn19 = (a, b, c) => (a + b + c) / 3;

// console.log(fn19(5, 10, 15))
// console.log(fn19(3, 10, 8))

// ====================================( 20 )====================================
const fn20 = (a, b, c) => {
  if ((a > b) & (b > c)) {
    return 1;
  } else if ((a < b) & (b < c)) {
    return 2;
  }
  if ((b > a) & (b > c)) {
    return b;
  } else if (a === b && b === c) {
    return 5;
  } else {
    return 0;
  }
};

// console.log(fn20(5,10,15));
// console.log(fn20(3,10,8));
// console.log(fn20(3,5,3));

// ====================================( 21 )====================================
const fn21 = (a, b, c) => {
  if (a === b) {
    return c;
  } else if (b === c) {
    return a;
  } else if (a === c) {
    return b;
  } else {
    return 0;
  }
};

// console.log(fn21(5,10,5));
// console.log(fn21(3,10,8));

// ====================================( 22 )====================================
const fn22 = (a, b) => {
  return a - b > 0 ? a - b : (a - b) * -1;
};

// console.log(fn22(2,6));
// console.log(fn22(-2,6));

// ====================================( 23 )====================================
const fn23 = (a) => (a > 0 ? a : a * -1);

// console.log(fn23(20));
// console.log(fn23(-15));

// ====================================( 24 )====================================
// const fn24 = (a) => {
//   if (a > 0 && a < 10) {
//     return 1;
//   } else if (a >= 0 && a < 100) {
//     return 2;
//   } else if (a >= 100 && a < 1000) {
//     return 3;
//   }
// };

const fn24 = (n) => {
  let count = 0;

  while (n > 0) {
    n = parseInt(n / 10);
    count++;
  }

  return count;
};

// console.log(fn24(20));
// console.log(fn24(324));
// console.log(fn24(2324));

// ====================================( 25 )====================================
const fn25 = (a, b, c, d) => {
  if (a > 0 && b > 0 && c > 0 && d > 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(fn25(5,6,4,7));
// console.log(fn25(-1,2,3,8));

// ====================================( 26 )====================================
const fn26 = (a, b, c) => {
  let count = 0;

  if (a % 2 === 0) {
    count++;
  }

  if (b % 2 === 0) {
    count++;
  }

  if (c % 2 === 0) {
    count++;
  }

  return count === 3 ? 2 : count === 0 ? 1 : count === 2 ? 3 : 0;
};

// console.log(fn26(5, 7, 9));
// console.log(fn26(16, 20, 30));
// console.log(fn26(18, 7, 16));

// ====================================( 27 )====================================
const fn27 = (a, b, c) => {
  let count = 0;

  if (a % 2 === 0) {
    count++;
  }

  if (b % 2 === 0) {
    count++;
  }

  if (c % 2 === 0) {
    count++;
  }

  return count === 2 ? 1 : count === 1 ? 2 : 0;
};

// console.log(fn27(8,2,9));
// console.log(fn27(16,21,17));

// ====================================( 28 )====================================
const fn28 = (a, b, c) => {
  let count = 0;

  if (a % 2 === 0) {
    count++;
  }

  if (b % 2 === 0) {
    count++;
  }

  if (c % 2 === 0) {
    count++;
  }

  return count === 2 ? 1 : count === 1 ? 2 : 0;
};

// console.log(fn27(8,2,9));
// console.log(fn27(16,21,17));

// ====================================( 29 )====================================
const fn29 = (a, b, c) => {
  if (a > 0 && b > 0 && c > 0) {
    return +(a + "" + b + "" + c);
  }

  return 0;
};

console.log(fn29(3, 6, 2));
console.log(fn29(8, 0, 3));
