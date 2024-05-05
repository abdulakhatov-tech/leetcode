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
