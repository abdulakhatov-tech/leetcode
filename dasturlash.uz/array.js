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
