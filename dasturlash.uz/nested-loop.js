// =================================== ( 1 ) ===================================
const fn1 = (n) => {
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        sum += 1 / i
    }

    return sum
}

// console.log(fn1(10));

// =================================== ( 2 ) ===================================
const fn2 = (rows) => {
    let shape = '';

    for(let i = 1; i <= rows; i++) {        
        for(let k = 1; k <= rows; k++) {
            shape += '*'
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn2(2));
// console.log(fn2(5));
// console.log(fn2(10));

// =================================== ( 3 ) ===================================
const fn3 = (rows) => {
    let shape = '';

    for(let i = 0; i <= rows; i++) {
        for(let j = 0; j <= rows; j++) {
            shape += `(${i},${j}) `
        }

        shape += '\n'
    }

    return shape;
}

// console.log(fn3(9));

// =================================== ( 4 ) ===================================
const fn4 = (rows) => {
    let shape = '';

    for(let i = 0; i <= rows; i++) {
        for(let j = 0; j <= rows; j++) {
            if(i === 0 || i === rows || j === 0) {
                shape += `(${i},${j}) `
            }
        }

        shape += '\n'
    }

    return shape;
}

// console.log(fn4(9));

// =================================== ( 5 ) ===================================
// =================================== ( 6 ) ===================================
// =================================== ( 7 ) ===================================
// =================================== ( 8 ) ===================================
// =================================== ( 9 ) ===================================
// =================================== ( 10 ) ===================================
// =================================== ( 11 ) ===================================
// =================================== ( 12 ) ===================================
// =================================== ( 13 ) ===================================
// =================================== ( 14 ) ===================================

