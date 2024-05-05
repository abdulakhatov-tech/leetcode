// ==============================================================================
// #1
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// function spelling(word) {
//    let result = "";
//    let resArr = [];

//    for (let i = 0; i < word.length; i++) {
//       result += word[i];
//       resArr.push(result);
//    }

//    return resArr;
// }

// console.log(spelling("bee"));

// ==============================================================================
// #2
// Given a word, write a function that returns the first index and the last index of a character.

// function charIndex(word, character) {
//    let firstIndex = word.indexOf(character);
//    let lastIndex = word.lastIndexOf(character);

//    return [firstIndex, lastIndex];
// }

// console.log(charIndex("hello", "l"));
// console.log(charIndex("circumlocution", "c"));

// ==============================================================================
// #3
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// function removeDups(arr) {
//    let newArr = [];

//    for (let i = 0; i < arr.length; i++) {
//       if (!newArr.includes(arr[i])) {
//          newArr = [...newArr, arr[i]];
//       }
//    }

//    return newArr;
// }

// console.log(removeDups([1, 0, 1, 0]));
// console.log(removeDups(["The", "big", "cat"]));

// ==============================================================================
// #4
// Given an integer array, transform that array into a mirror.

// function mirror(arr) {
//    let newArr = [...arr];

//    for (let i = arr.length - 2; i >= 0; i--) {
//       newArr.push(arr[i]);
//    }

//    return newArr;
// }

// console.log(mirror([0, 2, 4, 6]));
// console.log(mirror([1, 2, 3, 4, 5]));
// console.log(mirror([3, 5, 6, 7, 8]));

// ==============================================================================
// #5
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// function reverseArr(num) {
//    let numToString = num.toString();
//    let strToArr = numToString.split("");
//    let arrToReverse = strToArr.reverse();
//    let arrToNum = arrToReverse.map((item) => +item);

//    return arrToNum;
// }

// console.log(reverseArr(1485979));
// console.log(reverseArr(623478));
