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
const fn5 = (rows) => {
    let shape = '';

    for(let i = 0; i <= rows; i++) {
        for(let j = 0; j <= rows; j++) {
            if(i === 0 || i === rows || j % 2 === 0) {
                shape += `(${i},${j}) `
            } else {
                shape += '      '
            }
        }

        shape += '\n'
    }

    return shape;
}

// console.log(fn5(9));

// =================================== ( 6 ) ===================================
const fn6 = (rows) => {
    let shape = '';

    for(let i = 1; i <= rows; i++) {
        for(let j = 0; j <= rows; j++) {
            if(i*j < 10) {
                shape += `${i * j}    `
            } else {
                shape += `${i * j}   `
            }
        }

        shape += '\n'
    }

    return shape;
}

// console.log(fn6(9));

// =================================== ( 7 ) ===================================
const fn7 = (rows) => {
    let shape = '';

    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= rows; j++) {
            if(i === j) {
                shape += '*'
            } else {
                shape += ' '
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn7(5));

// =================================== ( 8 ) ===================================
const fn8 = (rows) => {
    let shape = '';

    for(let i = 0; i <= rows; i++) {
        for(let j = 0; j <= rows; j++) {
            if(i === j) {
                shape += `(${i},${j})`
            } else {
                shape += '  '
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn8(5));

// =================================== ( 9 ) ===================================
const fn9 = (rows) => {
    let shape = '';

    for(let i = rows; i > 0; i--) {
        for(let j = 1; j <= rows; j++) {
            if(i === j) {
                shape += '*'
            } else {
                shape += ' '
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn9(5));

// =================================== ( 10 ) ===================================
const fn10 = (rows) => {
    let shape = '';

    for(let i = rows; i > 0; i--) {
        for(let j = 1; j <= rows; j++) {
            if(i <= j) {
                shape += '*'
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn10(5));

// =================================== ( 11 ) ===================================
const fn11 = (rows) => {
    let shape = '';

    for(let i = rows; i > 0; i--) {
        for(let j = 1; j <= rows; j++) {
            if(i >= j) {
                shape += '*'
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn11(5));

// =================================== ( 12 ) ===================================
const fn12 = (rows) => {
    let shape = '';

    for(let i = rows; i > 0; i--) {
        for(let j = 1; j <= rows; j++) {
            if(i <= j) {
                shape += j
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn12(5));

// =================================== ( 13 ) ===================================
const fn13 = (rows) => {
    let shape = '';

    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= rows; j++) {
            if(i >= j) {
                shape += i
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn13(5));

// =================================== ( 14 ) ===================================
const fn14 = (rows) => {
    let shape = '';

    for(let i = 1; i <= rows; i++) {
        shape += ' '.repeat(i - 1)
        for(let k = 1; k <= rows; k++) {
            if(i == k || k) {
                shape += '*';
            } else {
                shape += ' '
            }
        }

        shape += '\n'
    }

    return shape
}

// console.log(fn14(5));

// =================================== ( 15 ) ===================================
const fn15 = (rows) => {
    let shape = '';

    for(let i = 1; i <= rows; i++) {
        for(let k = 1; k <= rows; k++) {
            if(i === 1 || i === rows || k === 1 || k === rows) {
                shape += '*';
            } else {
                shape += ' '
            }
        }

        shape += '\n';
    }

    return shape;
}

console.log(fn15(5));


// =================================== ( 16 ) ===================================
// =================================== ( 17 ) ===================================
// =================================== ( 18 ) ===================================
// =================================== ( 19 ) ===================================
// =================================== ( 20 ) ===================================

