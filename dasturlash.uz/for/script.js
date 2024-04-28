// ==================================================
// Sonlar yig'indisi
// let a = 5;
// let sum = 0;

// for (let i = 0; i < a; i++) {
//    sum += i;
// }
// console.log(sum);

// ==================================================
// Juft sonlar yig'indisi
// let a = 5;
// let sum = 0;

// for (let i = 0; i < a; i += 2) {
//    sum += i;
// }
// console.log(sum);
// ==================================================
// Toq sonlar yig'indisi
// let a = 5;
// let sum = 0;

// for (let i = 0; i < a; i++) {
//    if (i % 2 !== 0) {
//       sum += i;
//    }
// }
// console.log(sum);
// ==================================================
// 5ga bo'linadigan sonlar yig'indisi
// let a = 30;
// let sum = 0;

// for (let i = 0; i < a; i++) {
//    if (i % 5 === 0) {
//       sum += i; // 5, 10, 15, 20, 25
//    }
// }
// console.log(sum);
// ==================================================
// Juft sonlar soni
// let a = 5;
// let counter = 0;

// for (let i = 0; i < a; i++) {
//    if (i % 2 === 0) {
//       counter++
//    }
// }
// console.log(sum);
// ==================================================
// a va b sonlar orasidagi sonlar yig'indisi
// let a = 1;
// let b = 5;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//    sum += i;
// }

// console.log(sum);
// ==================================================
// a va b sonlar orasidagi juft sonlar
// let a = 1;
// let b = 5;
// let sum = 0;

// for (let i = a; i <= b; i+=2) {
//    sum += i;
// }

// console.log(sum);
// ==================================================
// a va b sonlar orasida 3ga bo'linadiganlar
// let a = 1;
// let b = 5;
// let sum = 0;

// for (let i = a; i <= b; i++) {
// if (i % 3 == 0) {
//    sum += i;
// }
// }

// console.log(sum);
// ==================================================
// a va b sonlar orasida 2 va 3 ga bo'linadiganlar
// let a = 1;
// let b = 10;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//    if (i % 2 === 0 && i % 3 === 0) {
//       sum += i;
//    }
// }

// console.log(sum);
// ==================================================
// a va b sonlar orasida musbat sonlar
// let a = -10;
// let b = 5;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//    if (i > 0) {
//       sum += i;
//    }
// }

// console.log(sum);
// ==================================================
// a sonini 5chi darajasi
// let a = 2;
// let daraja = 5;
// let sum = 1;

// for (let i = 1; i <= daraja; i++) {
//    sum *= a;
//    console.log(i);
// }

// console.log(sum);
// ==================================================
// a sonini nchi darajasi
// let a = 2;
// let daraja = 5;
// let sum = 1;

// for (let i = 1; i <= daraja; i++) {
//    sum *= a;
//    console.log(i);
// }

// console.log(sum);
// ==================================================
// Ketma ketlik

// Misol Sharti
// a , n sonlari berilgan (a soni 1-9 o'rtasida ).

// Ketma ketlikni hisoblang. a + aa + aaa + ........  nta a bo'ladi.

// Yig'indini konsolga chiqarish kerak.

// let a = 7;
// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//    sum += +a.toString().repeat(i);
// }

// console.log(sum);
// ==================================================
// Mukammal son
//
// let a = 15;
// let sum = 0;

// for (let i = 0; i < a; i++) {
//    if (a % i === 0) {
//       console.log(i);
//       sum += i;
//    }
// }

// if (a === sum) {
//    console.log("Mukammal son", sum);
// } else {
//    console.log("Mukammal son emas", sum);
// }
// ==================================================
// Ketma - ketlik kvadrati
// let n = 6;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//    sum += i * i;
// }

// console.log(sum);
// ==================================================
// Armstrong raqami
// let n = 1634;
// let sum = 0;

// for (let i = 0; i < n.toString().length; i++) {
//    let raqam = 1;
//    for (let j = 0; j < n.toString().length; j++) {
//       raqam *= n.toString()[i];
//    }
//    sum += raqam;
// }

// if (n === sum) {
//    console.log("Armstron raqami", sum);
// } else {
//    console.log("unday raqam emas", sum);
// }
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
