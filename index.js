const reverse = (x) => {
    const str = x.toString();

    let symbols = ''
    let numbers = ''
    
    for(let char of str) {
        if(isNaN(char)) {
            symbols += char
        } else if (isFinite(char)) {
            numbers += char
        } 
    }
    
    let numbers2 = '';
    let count = 0
    for(let char of numbers.split('').reverse()) {
        if(Number(char) !== 0) {
            count += 1
        } if(count !== 0) {
            numbers2+=char;
        }
    }
    
    
    
    const result = Number(symbols + numbers2)
    
    if(result > (2 ** 31) - 1 || result < -(2 ** 31)) {
        return 0
    }

    return result
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(901000));
console.log(reverse(1534236469))
