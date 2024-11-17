// Misol Sharti
// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// n nechta bo'lsa diaganaliga chiqadigan  yulduzchalar soni ham shuncha bo'lishi kerak.

// Namuna

// Masalan n = 5
// *
//  *
//   *
//    *
//     * 

// Maslahat
// Voy misol qiyin emas. 2ta for kerak.  Bitta counter yaratib uni qiymatini konsolga chiqaring va qiymatni 1ga oshiring.

const fn = (n) => {
    let sum = "";
  
    for (let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
          if(i === j) {
              sum += '*'
          } else {
              sum += ' '
          }
      }
      sum += '\n'
    }
  
    return sum;
  };
  
  console.log(fn(5));