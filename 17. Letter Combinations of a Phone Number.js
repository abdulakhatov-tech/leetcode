
var letterCombinations = function(digits) {
    if(!digits.length) return [];

    const numbers = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    let result = ['']
    
    for(let digit of digits) {
        const possibleLetters = numbers[digit];
        const temp = []

        for(let comp of result) {
            for(let letter of possibleLetters) {
                temp.push(comp + letter)
            }
        }

        result = temp
    }

    return result;
};

const result = letterCombinations("23")
console.log('result :>> ', result)