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

