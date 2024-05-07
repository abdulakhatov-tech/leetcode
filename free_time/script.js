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
//    return arr.filter((item) => {
//       let result = [];

//       for (let i of item) {
//          if (result.includes(i)) {
//             return false;
//          }
//          result.push(i);
//       }

//       return true;
//    });
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

// ==============================================================================
// #15

// function count(n) {
//    let result = [];

//    for (let i = 1; i <= n; i++) {
//       result.push(i);
//    }

//    return result;
// }

// console.log(count(10));

// ==============================================================================
// #16

// function countingSheep(arr) {
//    let result = arr.filter((item) => !!item);

//    return result.length;
// }

// console.log(
//    countingSheep([
//       true,
//       true,
//       true,
//       false,
//       true,
//       true,
//       true,
//       true,
//       true,
//       false,
//       true,
//       false,
//       true,
//       false,
//       false,
//       true,
//       true,
//       true,
//       true,
//       true,
//       false,
//       false,
//       true,
//       true,
//    ])
// );

// ==============================================================================
// #17

// function str_count(str, character) {
//    let count = 0;

//    for (let i = 0; i < str.length; i++) {
//       if (str[i] === character) {
//          count++;
//       }
//    }

//    return count;
// }

// console.log(str_count("Hello", "o"));

// ==============================================================================
// #18

// Sort Numbers in Descending Order
// Create a function that takes any non-negative number as an argument and return it with its
//  digits in descending order. Descending order is when you sort from highest to lowest.

// function sortDescending(num) {
//    let numToString = num.toString();
//    let result = "";

//    for (let i = numToString.length - 1; i >= 0; i--) {
//       result += numToString[i];
//    }

//    return +result;
// }

// console.log(sortDescending(123));
// console.log(sortDescending(1254859723));

// ==============================================================================
// #19

// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// function set(arr) {
//    let result = [];
//    return arr
//       .filter((item) => {
//          if (result.includes(item)) {
//             return false;
//          }
//          result.push(item);

//          return true;
//       })
//       .sort((x, y) => x - y);
// }

// console.log(set([1, 3, 3, 5, 5]));
// console.log(set([5, 7, 8, 9, 10, 15]));
// console.log(set([3, 3, 3, 2, 1]));

// ==============================================================================
// #20

// Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1) and
// return "Hello" + name if num is 1, otherwise return "Bye" + name.

// function sayHelloBye(name, num) {
//    if (num === 1) {
//       return `Hello, ${name.slice(0, 1).toUpperCase() + name.slice(1)}`;
//    } else if (num === 0) {
//       return `Bye, ${name.slice(0, 1).toUpperCase() + name.slice(1)}`;
//    } else {
//       return "Num must be 0 or 1!";
//    }
// }

// console.log(sayHelloBye("alon", 1));
// console.log(sayHelloBye("Tomi", 0));

// ==============================================================================
// #21

// Is the Number Symmetrical?
// Create a function that takes a number as an argument and returns true or false
// depending on whether the number is symmetrical or not. A number is symmetrical
// when it is the same as its reverse.

// function isSymmetrical(num) {
//    console.log("Object");
// }

// console.log(isSymmetrical(7227));
// console.log(isSymmetrical(12567));
// console.log(isSymmetrical(44444444));
// console.log(isSymmetrical(9939));
// console.log(isSymmetrical(1112111));

// ==============================================================================
// #22

// function remove(str) {
//    if (str[str.length - 1] === "!") {
//       return str.slice(0, str.length - 1);
//    }

//    return str;
// }

// console.log(remove("Hi!"));
// console.log(remove("Hi!!!"));
// console.log(remove("!Hi!"));

// ==============================================================================
// #23

// function differenceOfVolumesOfCuboids(arr1, arr2) {
//    let sum1 = 0;
//    let sum2 = 0;

//    sum1 = arr1.reduce((acc, item) => acc * item, 1);
//    sum2 = arr2.reduce((acc, item) => acc * item, 1);

//    return Math.abs(sum1 - sum2);
// }

// console.log(differenceOfVolumesOfCuboids([2, 2, 3], [5, 4, 1]));

// ==============================================================================
// #23
// function flickSwitch(arr) {
//    let result = [];

//    let option = true;
//    for (let item of arr) {
//       if (item === "flick") {
//          option = !option;
//       }
//       result.push(option);
//    }

//    return result;
// }

// console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
// console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
// console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));

// function calculatePriceExcludingVAT(price) {
//    let VAT = 15;
//    let originalPrice = (price / (100 + VAT) / 100) * 100 * 100;

//    return originalPrice;
// }

// console.log(calculatePriceExcludingVAT(230));
