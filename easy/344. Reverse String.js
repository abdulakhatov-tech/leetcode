function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
}

const inputString = ['h', 'e', 'l', 'l', 'o'];
reverseString(inputString);
console.log(inputString);
