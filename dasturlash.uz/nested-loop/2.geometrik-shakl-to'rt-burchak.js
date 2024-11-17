// Misol Sharti
// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// Namuna
// Masalan: n = 5
//  *****
//  *****
//  *****
//  *****
//  *****

// Masalan: = 3
//  ***
//  ***
//  ***

// Misolni 2ta for bilan ishlang. Qatorlar soni n ta bo'lsin va har bir qatordagi yulduzchalar soni ham n ta bo'lsin.

const getFn = (n) => {
    let sum = ``;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j <n; j++) {
            sum += '*'
        }
        sum+='\n'
    }

    return sum
}

console.log(getFn(5))
console.log(getFn(3))