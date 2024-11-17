// Misol Sharti
// n soni berilgan.

// Geometrik shaklni ekranga chiqaring.

// Namuna

//   (0,0) (0,1) (0,2) (0,3) (0,4) (0,5) (0,6) (0,7) (0,8) (0,9)
//   (1,0)
//   (2,0)
//   (3,0)
//   (4,0)
//   (5,0)
//   (6,0)
//   (7,0)
//   (8,0)
//   (9,0) (9,1) (9,2) (9,3) (9,4) (9,5) (9,6) (9,7) (9,8) (9,9) 

// Maslahat
// Voy misol qiyin emas. 2ta for kerak.  i va j larni qiymatlarini chiqarish kerak. Agar  i ning qiymati 0 yoki  9   yoki  j ning qiymati 0 bo'lsa konsolga chiqaring.  

const fn = (n) => {
    let sum = '';

    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= n; j++) {
            if(i === 0 || i === 9 || j===0) {
                sum+=`(${i}, ${j}) `
            }
        }
        sum+='\n'
    }

    return sum
}

console.log(fn(9))