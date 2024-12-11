// =================================== ( 1 ) ===================================
const fn1 = (arr) => {
    let max = 0;

    for(let i of arr) {
        if(max < i) {
            max = i;
        }
    }

    return max;
}

// console.log(fn1([12, 21, 36, 71, 24, 85, 12, 30, 25]));

// =================================== ( 2 ) ===================================
const fn2 = (arr) => {
    let min = arr[0];

    for(let i of arr) {
        if(min > i) {
            min = i;
        }
    }

    return min;
}

// console.log(fn2([12, 21, 36, 71, 24, 85, 12, 30, 3, 25]));

// =================================== ( 3 ) ===================================
const fn3 = (arr) => {
    let average = 0;

    for(let i of arr) {
        average += i
    }

    return parseInf(average / arr.length);
}

// console.log(fn3([6, 25, 91, 23, 72, 9, 18, 6]));

// =================================== ( 4 ) ===================================
const fn4 = (arr, n) => {
    for(let i of arr) {
        if(i === n) {
            return true
        }
    }



    return false;
}

console.log(fn4([6, 25, 91, 23, 72, 9, 18, 6], 23));