// ([1, -1, 2, -2, 3], 0) => [[1, -1], [2, -2]]

// function twoSum(arr, S) {
//     var newArr = [];
//     var obj = {};
//     for (var i = 0; i < arr.length; i++) {
//         var minusElement = S - arr[i];
//         if (obj[minusElement.toString()] !== undefined) { 
//             newArr.push([arr[i], minusElement]);
//         }
//         obj[arr[i].toString()] = arr[i];
//     }
//     return newArr;
// }
// console.log(twoSum([1, -1, 2, -2, 3, -3], 0))


// const obj = {
//     name: 'Uzbekistan',
//     child: {
//         name: 'Toshkent',
//         child: {
//             name: 'Yunusobod',
//             child: {
//                 name: 'Ahmad donish',
//                 child: {
//                     name: '13 kvartal',
//                     child: {
//                         name: '10 dom',
//                     }
//                 }
//             }
//         }
//     }
// }


// function getName (obj) {
//     console.log(obj)
//     if(obj.child){
//         getName(obj.child)
//     }
// }

// getName(obj)


// const curry = x => y => console.log( x + y);

// const a = curry(20)
// a(50)



// ??

// const a = 10
// const b = 12

// console.log(a ?? b)


// const arr = ['islom', 'ilhom', 'hoshim', 'diyour']
// console.log(arr.at(-1))


// const object1 = {
//     a: 1,
//     b: 'sfsd'
// }

// const object2 = {
//     a: 1,
//     b: 'sfsd'
// }

// console.log(JSON.stringify(object1) === JSON.stringify(object2))


// 1
function isPalindrome(str){
    return str.split('').reverse().join('') === str
}

console.log(isPalindrome('kattak'))


// 2
function getMinMax(arr){
    return{
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
}

console.log(getMinMax([1,2,3,4,5,6,7,8]))

// 3
// #1
function removeDuplicate(arr) {
    return  [...new Set(arr)]
}

const array = ['a', 'b', 'a', 'e', 'b', 'd', 'a']
console.log(removeDuplicate(array))

// #2
function removeDuplicate(arr) {
    const map = {}

    for(const char of arr){
        if(map[char]){
            map[char]++
        }else{
            map[char] = 1
        }
    }
    return Object.keys(map)
}

const arr = ['a', 'b', 'a', 'e', 'b', 'd', 'a']
console.log(removeDuplicate(arr))


// 4
// #1
function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString('assalomu alaykum'))
// #2
function reverseString2(str){
    let revesedString = ''

    str.split('').forEach(char => {
        revesedString = char + revesedString
    })

    return revesedString
}

console.log(reverseString2('hello'))

// #3
function reverseString3(str){
    return str.split('').reduce((prev, curr) => curr + prev, '')
}

console.log(reverseString3('hello'))

//5
// write a function that counts the number of vowels in a sentence
// #1
function getVowelsCount(str){
    return str.match(/[aeuio]/gi) 
    ? str.match(/[aeuio]/gi).length 
    : 0
    
}

console.log(getVowelsCount('Assalomu alaykum'))

// #2
function getVowelsCount2(str){
    let vowelsCount = 0

    for (let char of str){
        if(/[aeiou]/gi.test(char)){
            vowelsCount ++
        }
    }
    return vowelsCount
    
}

console.log(getVowelsCount2('Assalomu alaykum'))

// #3
function getVowelsCount3(str){
    let vowelsCount2 = 0
    const vowels = ['a','e','i','o','u']

    for(let char of str){
        if(vowels.includes(char.toLowerCase())){
            vowelsCount2++
        }
    }
    return vowelsCount2
}

console.log(getVowelsCount3('Assalomu alaykum'))


// 6
// write a function that capitalize all words in a sentence

// #1
function capitalize(str){
    return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

console.log(capitalize('afsAaf fsgsdgsd'))

// #2
function capitalize2(str){
    return str
        .split(' ')
        .reduce((prev, current) => {
            return `${prev} ${current[0].toUpperCase() + current.slice(1)}`
        }, '')
}

console.log(capitalize2('afsAaf fsgsdgsd'))


// #3
function capitalize3(str){
    const words = []

    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    
    return words.join(' ')
}

console.log(capitalize3('afsAaf fsgsdgsd'))


//7
// get the character that is most commonly used in a string 
function normalizeString(str){
    return str
        .replace(/[^\w]/g,'')
        .toLowerCase()
}

function getMaxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    for(let char of normalizeString(str)){
        if(charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(getMaxChar('aaabbc'))


// 8
// white a function that will pring 1 to 100.
// #1
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        } else if(i % 3 === 0){
            console.log('fizz');
        }else if (i % 5 === 0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
}

fizzBuzz()

// #2
function fizzBuzz2(){
    for(let i = 1; i <= 100; i++){
        console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);
    }
}
fizzBuzz2()


// 9
// write a function that will check if two strings are anagram of each other





//10
let user = { name: 'Shaxzod' }
let userAge = { age: 20 }
let userJob = { job: 'javascript developer' }

const objectGroup = Object.assign(user, userAge, userJob)
console.log(objectGroup);


// 11
let phoneNumber = {
    user1: 1111,
    user2: 2222,
    user3: 3333,
    user4: 4444,
    user5: 5555,
}

// #1
let users = []

for(let key in phoneNumber){
    users.push(key)
}
console.log(users);

// #2
const users2 = Object.keys(phoneNumber)

console.log(users2);

// 12
let salaries = {
    Ali: 160,
    Vali: 220,
    Anvar: 250,
}

let sum = Object.values(salaries).length ? Object.values(salaries).reduce((prev, current) => prev + current) : 0
console.log(sum);



function findStock(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= arr[i+1] || arr[i] > arr[i+1]){
            return arr[i]
        }
    }
}

console.log(findStock([1,2,3,4,5,6,2,4,8]))


console.log([] + []) // empty string

console.log(0.1+0.2);

console.log(('hi').__proto__.__proto__.__proto__);