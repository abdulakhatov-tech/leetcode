
// #1.
// Misol Sharti
// n soni berilgan.

// Quyidagi yig'indini hisoblovchi dastur yozing.

// (1/1 + 1/2 + 1/3 + 1/4 ..... 1/n ).

// Maslahat
// Misolni bitta for orqali ishlang.  Bunda for  1 dan n gacha aylanish uchun ishlatiladi.  0 ni inobatga olmaymiz sababi 1/0  da xatolik beradi.   

// Deylik n = 6 biz  hisoblashimiz  kerak  1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6    va shu ketmaketlikni yig'indisini konsolga chiqarish kerak

const n = 10;
let sum = 0;

for(let i = 1; i <= n; i++) {
    sum += 1/i
}

console.log(sum)