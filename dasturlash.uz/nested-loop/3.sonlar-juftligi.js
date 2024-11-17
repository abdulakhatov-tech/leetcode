// Misol Sharti
// n soni berilgan.

// Geometrik shakilni ekranga chiqaring.

// Namuna

//     (0,0) (0,1) (0,2) ........... (0,9)
//     (1,0) (1,1) (1,2) ........... (1,9)
//                                ...........
//                                ..........
//                                ..........
//     (9,0) (9,1) (9,2) ........... (9,9) 

// Maslahat
// Voy misol qiyin emas. 2ta for kerak.  i va j larni qiymatlarini  konsolga chiqarsa bo'ldi.

const fn = (n) => {
    let sum = ''
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= n; j++) {
            sum += `(${i}, ${j}) `
        }
        sum += '\n'
    }

    return sum
}

console.log(fn(5))