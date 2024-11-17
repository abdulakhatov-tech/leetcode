// Misol Sharti
// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// (0,0)
//     (1,1)
//         (2,2)
//             (3,3)
//                 (4,4)
//                     .
//                       .
//                        (n,n)

// Namuna

// Masalan n = 5
// (0,0)
//     (1,1)
//         (2,2)
//             (3,3)
//                 (4,4)
//                     (5,5)

const fn = (n) => {
  let sum = "";

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j) {
        sum += `(${i}, ${j})`;
      } else {
        sum += " ";
      }
    }
    sum += "\n";
  }

  return sum;
};

console.log(fn(5));
