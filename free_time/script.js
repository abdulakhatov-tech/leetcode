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

function charIndex(word, character) {
   let firstIndex = word.indexOf(character);
   let lastIndex = word.lastIndexOf(character);

   return [firstIndex, lastIndex];
}

console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));
