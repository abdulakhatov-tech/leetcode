
// Misol Sharti
// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// n nechta bo'lsa bo'yiga  chiqadigan  yulduzchalar soni ham shuncha bo'lishi kerak. 

// Namuna


// Masalan: n = 5
//  *
//  **
//  ***
//  ****
//  ***** 


const fn = (n) => {
    let sum = '';

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if(j === i) {
                sum +=  '*'.repeat(i)
            } 
        }
        sum+='\n'
    }

    return sum
}

console.log(fn(5))