// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// n nechta bo'lsa bo'yiga  chiqadigan  yulduzchalar soni ham shuncha bo'lishi kerak.

// Namuna

// Masalan: n = 5

//  *****
//  ****
//  ***
//  **
//  *

// Maslahat
// Misol qiyin  piyin mas xopmi. Kallani ishlatib ishlang. 3-4 soat vaqt ketsa ham.

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
