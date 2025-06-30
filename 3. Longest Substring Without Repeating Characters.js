function lengthOfLongestSubstring(s) {
  let arr = [];
  let substr = "";

  if (!s.length) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (!substr.includes(s[j])) {
        substr += s[j];
      } else {
        arr.push(substr.length);
        substr = "";
        break;
      }
    }
  }

  return arr.sort((a, b) => b - a)[0] || 1;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring(" ")); // Output: 1
console.log(lengthOfLongestSubstring("ctnkh")); // Output: 5
console.log(lengthOfLongestSubstring("jbpnbwwd")); // Output: 4

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring(" ")); // 3
