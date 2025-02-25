const lengthOfLongestSubstring = (str) => {
  let arr = [];
  let subStr = "";

  for (let i = 0; i < str.length; i++) {
    for(let k = i; k < str.length; k++) {
      if(!subStr.includes(str[k])) {
        subStr += str[k] 
      } else {
        arr.push(subStr)
        subStr = '';
        k = str.length;
      }
    }
  }
  arr.push(subStr)

  let maxCount = 0;

  for(let item of arr) {
    if(item.length > maxCount) {
      maxCount = item.length;
    }
  }

  return arr;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring(" ")); // 3
