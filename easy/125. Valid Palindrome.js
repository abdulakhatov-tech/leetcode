function isPalindrome(s) {
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  return cleanedString === cleanedString.split('').reverse().join('');
}

let result = isPalindrome('amanaplanacanalpanama');

console.log(result);
