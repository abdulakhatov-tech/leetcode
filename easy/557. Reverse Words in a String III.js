function reverseWords(s) {
  let result = '';

  for (let word of s.split(' ')) {
    let w = '';
    for (let i = word.length - 1; i >= 0; i--) {
      w += word[i];
    }

    result += w + ' ';
  }

  return result.trim();
}

let result = reverseWords("Let's take LeetCode contest");
console.log(result);
