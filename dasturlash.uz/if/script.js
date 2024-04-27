// ===================================================================================

// #1
// 10 bilan taqqoslash
// Misol Sharti
// Berilgan son 10 dan katta bo'lsa unga 3 ni qo'shib konsolga chiqaring.

// Agar 10 dan kichik bo'lsa 2ga ko'paytirib natijani konsolga chiqaring.

// Agar 10 ga teng bo'lsa 22 sonini konsolga chiqaring.

// let n = 10;
// if (n > 10) {
//    n += 3;
// } else if (n < 10) {
//    n *= 2;
// } else {
//    n += 12;
// }
// console.log(n);

// ===================================================================================
// #2
// Butun qism

// Berilgan a sonini 3ga bo'lgandagi butun  qismini b o'zgaruvchiga
// joylang va b sonini konsolga chiqaring.

// let a = 120;
// let b = (a - (a % 3)) / 3;

// console.log(b);
// #3
// Qoldig'ini aniqlash

// a soni berilgan. a sonini 3ga bo'lgandagi qoldig'ini kansolga chiqaring.

// let a = 10;
// let qoldiq = a % 3;
// console.log(qoldiq);
// ===================================================================================
// #4
// Juft yoki Toq son

// Sonning  juft  yoki  toqligini  aniqlang.  Agar  juft bo'lsa 'juft' so'zini
// return qiling. Agar toq bo'lsa 'toq' so'zini return qiling.

// let num = 10;
// if (num % 2 === 0) {
//    console.log("juft");
// } else {
//    console.log("toq");
// }
// ===================================================================================
// #5
// Ikkita sondan kattasi

//  a va b sonlari berilgan.  Berilgan ikkita sondan kattasini konsolga chiqaring.
//  Agar ular teng bo'lsa 'Voy ular teng' yozuvi chiqsin.

// let a = 10;
// let b = 20;

// if (a > b) console.log(a);
// if (b > a) console.log(b);
// if (a === b) console.log("Voy ular teng");
// ===================================================================================
// #6
// a, b, c  katta son

// Misol Sharti
//  a, b, c  sonlari berilgan.  Shu sonlardan eng kattasini toping.

// let a = 10;
// let b = 20;
// let c = 30;
// if ((a > b && b > c) || (a > c && c > b)) console.log(a);
// if ((b > a && a > c) || (b > c && c > a)) console.log(b);
// if ((c > a && a > b) || (c > b && b > a)) console.log(c);
// ===================================================================================
// #6
// Musbat  vs Manfiy

//  a soni berilgan. Sonning musbat yoki manfiy ekanligini aniqlang.
// Son 0 ga teng bo'lsa, 0 ni konsolga chiqaring.

// let a = 10;
// if (a > 0) console.log("musbat");
// if (a < 0) console.log("manfiy");
// if (a === 0) console.log(0);
// ===================================================================================
// #7
// Son 5 ga bo'linadimi?

//  a soni berilgan. Berilgan son 5 ga bo'linadimi? Agar bo'linsa  konsolga true bo'lmasa false chiqaring.

// let a = 10;
// if (a % 5 === 0) {
//    console.log(true);
// } else {
//    console.log(false);
// }
// ===================================================================================
// #8
// Son 3 va 4 ga bo'linadimi

// Berilgan son 3 va 4 ga bo'linadimi? Agar bo'linsa konsolga 'true'  bo'lmasa falseni chiqaring.

// let son = 12;
// if (son % 3 === 0 && son % 4 === 0) {
//    console.log(true);
// } else {
//    console.log(false);
// }

// ===================================================================================
// #9
// Berilgan yil kabisa yilmi

// Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.
// Agar bo'linmasa false  konsolga chiqsin.

// Kabisa yil deb 4 yilda birmarta keladigan yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi.
// Bu yili fevral oyida 29 kun bo'ladi.

// let year = 2000;
// if (year % 4 === 0) {
//    console.log(true);
// } else {
//    console.log(false);
// }
// ===================================================================================
// #10
// Berilgan char sonmi

// c char berilgan. Berilgan  char alfavit  yoki raqam ekanligini aniqlang.
// Agar alfavit bo'lsa 'alpha' ni  konsolga chiqaring,  agar son bo'lsa 'son' ni  konsolga chiqaring.

// let c = "a";
// if (typeof c === "number") console.log("son");
// if (typeof c === "string") console.log("alpha");
// ===================================================================================
// #11
// Kichik yoki Katta alfavit

// c char berilgan. Berilgan  char katta alfavit yoki kichik alfavit ekanlini aniqlang .

// Agar alfavit kichik bo'lsa 'lowerCase' so'zini konsolga chiqaring,
// Agar alfavit katta bo'lsa 'upperCase' ni chiqaring,  agar alfavit  bo'lmasa  'none' ni  chiqaring.

// let c = "a";
// if (typeof c === "string" && c.charCodeAt() >= 97 && c.charCodeAt() <= 122)
//    console.log("lowerCase");
// if (typeof c === "string" && c.charCodeAt() >= 65 && c.charCodeAt() <= 90)
//    console.log("upperCase");
// if (typeof c !== "string") console.log("nono");

// ===================================================================================
