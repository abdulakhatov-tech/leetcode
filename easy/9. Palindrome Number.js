// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  let reverse = x.toString().split('').reverse().join('');

  if (x == reverse) return true;
  return false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
