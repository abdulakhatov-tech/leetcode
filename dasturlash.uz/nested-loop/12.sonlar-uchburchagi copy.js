// Misol Sharti
// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// Namuna

// Masalan: n = 5

//  1
//  12
//  123
//  1234
//  12345 

// Maslahat
// Misol qiyin e piyin mas xopmi. Kallani ishlatib ishlang. 3-4 soat vaqt ketsa ham.



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
  