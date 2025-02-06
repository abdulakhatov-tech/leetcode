// #1. 
const fn1 = (arr) => {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let sum = 1;
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) {
                sum *= arr[j]
            }
        }
        newArr.push(sum)
    }

    return newArr
}

// console.log(fn1([1,2,3,4]));

// #2
const fn2 = (arr) => {

    arr.forEach((item, index, array) => {

        if(item === 0) {
            const findIndex = arr.indexOf(item)
            const zero = arr.splice(findIndex, 1)[0]
            arr.push(zero)
        }
    })

    return arr;
}

// console.log(fn2([0,0,1,0,2,3,4]));

// #3
const fn3 = (arr) => {
    let min = arr[0];
    let maxProfit = 0;

    arr.forEach((price) => {
        if(price < min) {
            min = price;
        } else if(price - min > maxProfit) {
            maxProfit = price - min
        }
    })

    return maxProfit
}

// console.log(fn3([7, 1, 5, 3, 6, 4]))
// console.log(fn3([7, 6, 4, 3, 1]))

const fn4 = (arr, target) => {
    let sum = 0;
    let result = []

    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arr.length; k++) {
            sum = arr[i] + arr[k]
            if(sum === target && i < k) {
                result.push([i, k])
            }
        }
    }

    return result.length === 1 ? result[0] : result
}

// console.log(fn4([1,2,3,4], 4))
// console.log(fn4([1,2,3,4], 5))
// console.log(fn4([2, 7, 11, 15], 9))
