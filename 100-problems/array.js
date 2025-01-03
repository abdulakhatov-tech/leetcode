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

console.log(fn2([0,0,1,0,2,3,4]));
