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

// ==============================================================================
// #6
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// function capMe(arr) {
//    let result = arr.map(
//       (item) => `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`
//    );

//    return result;
// }

// console.log(capMe(["mavis", "senaida", "letty"]));
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));

// ==============================================================================
// #7
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// function transformUpvotes(str) {
//    let strToArr = str.split(" ");
//    let result = [];

//    for (let i = 0; i < strToArr.length; i++) {
//       console.log(strToArr[i]);
//       let num = "";
//       for (let k = 0; k < strToArr[i].length; k++) {
//          if (strToArr[i][k] === "k") {
//             num = num * 1000;
//          } else {
//             num += strToArr[i][k];
//          }
//       }
//       result.push(num);
//    }

//    return result.map((item) => +item);
// }

// console.log(transformUpvotes("6.8k 13.5k"));
// console.log(transformUpvotes("5.5k 8.9k 32"));
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));

// ==============================================================================
// #8
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// function reverseImage(arr) {
//    let result = [];

//    for (let i = 0; i < arr.length; i++) {
//       let item = [];
//       for (let k = 0; k < arr[i].length; k++) {
//          if (arr[i][k] === 0) {
//             item.push(1);
//          } else {
//             item.push(0);
//          }
//       }

//       result.push(item);
//    }

//    return result;
// }

// console.log(
//    reverseImage([
//       [1, 0, 0],
//       [0, 1, 0],
//       [0, 0, 1],
//    ])
// );

// console.log(
//    reverseImage([
//       [1, 1, 1],
//       [0, 0, 0],
//    ])
// );

// ==============================================================================
// #9
// Create a function that takes an array and returns the sum of all items in the array.

// function sumArray(arr) {
//    let result = arr.reduce((acc, item) => acc + item, 0);

//    return result;
// }

// console.log(sumArray([1, 2, 3]));

// ==============================================================================
// #10
// Create a function that returns only strings with unique characters.

// function filterUnique(arr) {
//    let result = [];

//    for (let i = 0; i < arr.length; i++) {
//       let a = [];

//       for (let k = 0; k < arr[i].length; k++) {
//          if (!a.includes(arr[i][k])) {
//             a.push(arr[i][k]);
//          } else {
//             a = [];

//          }
//       }

//       result.push(a);
//    }

//    return result;
// }

// console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));
// console.log(filterUnique(["88", "999", "989", "9988", "9898"]));

// ==============================================================================
// #11
// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.

// function sumOddAndEven(arr) {
//    let even = arr
//       .filter((item) => item % 2 === 0)
//       .reduce((acc, item) => acc + item, 0);
//    let odd = arr
//       .filter((item) => item % 2 !== 0)
//       .reduce((acc, item) => acc + item, 0);

//    let result = [even, odd];

//    return result;
// }

// console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]));
// console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6]));

// ==============================================================================
// #12
// Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr, str) {
//    let result = arr.indexOf(str);

//    return result;
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));

// ==============================================================================
// #13
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// function word(num) {
//    const nums = {
//       one: 1,
//       two: 2,
//       three: 3,
//       four: 4,
//       five: 5,
//       six: 6,
//       seven: 7,
//       eight: 8,
//       nine: 9,
//    };

//    return nums[num];
// }

// console.log(word("one"));
// console.log(word("two"));

// ==============================================================================
// #14
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// function toNumberArray(arr) {
//    let result = arr.map((item) => +item);

//    return result;
// }

// console.log(toNumberArray(["9.4", "4.2"]));
// console.log(toNumberArray(["9.5", "8.8"]));
