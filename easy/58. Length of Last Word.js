function lengthOfLastWord(s) {
  let count = 0;
  let lastWord = s.trim().split(' ').reverse()[0];

  for (let i = 0; i < lastWord.length; i++) {
    count++;
  }

  return count;
}

let result = lengthOfLastWord('Hello World');
console.log(result);
