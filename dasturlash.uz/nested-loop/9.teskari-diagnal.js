// Misol Sharti
// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// n nechta bo'lsa diaganaliga chiqadigan yulduzchalar soni ham shuncha bo'lishi kerak.

// Namuna

// Masalan: n = 6
//       *
//      *
//     *
//    *
//   *
//  *

const fn = (n) => {
  let sum = "";

  for (let i = n; i >= 0; i--) {
    for (let j = n; j >= 0; j--) {
      if (i === j) {
        sum += " ".repeat(j) + `*`;
      }
    }
    sum += "\n";
  }

  return sum;
};

console.log(fn(5));
