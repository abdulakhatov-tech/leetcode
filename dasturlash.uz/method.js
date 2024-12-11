// =================================== ( 1 ) ===================================
const fn1 = (str) => {
    return str;
}

// console.log(fn1('dasturlash.uz'));

// =================================== ( 2 ) ===================================
const fn2 = (str) => {
    return str;
}

// console.log(fn2('dasturlash.uz'));

// =================================== ( 3 ) ===================================
const fn3 = (num, str) => {
    return {
        num, str
    };
}

// console.log(fn3(2, 'dasturlash.uz'));

// =================================== ( 4 ) ===================================
const fn4 = (n1, n2) => {
    return n1 + n2;
}

// console.log(fn4(2, 5));

// =================================== ( 5 ) ===================================
const fn5 = (n1, n2) => {
    return 2 * (n1 + n2);
}

// console.log(fn5(2, 5));

// =================================== ( 6 ) ===================================
const fn6 = (n1, n2) => {
    return (n1 * n2);
}

// console.log(fn6(2, 5));

// =================================== ( 7 ) ===================================
const fn7 = (arr) => {
    let result = ''

    for(let item of arr) {
        result += item + ', '
    }

    return result
}

// console.log(fn7(['HTML', 'CSS', 'JavaScript', 'Typescript']));

// =================================== ( 8 ) ===================================
const fn8 = (num) => {
    let result = 0;

    for(let i = num; i >0; i = Math.floor(i/10)) {
        result += i % 10;
    }

    return result;
}

// console.log(fn8(123));

