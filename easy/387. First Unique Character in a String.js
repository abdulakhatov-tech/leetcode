function firstUniqChar(s) {
  let result = {};

  for (let i of s) {
    result[i] = (result[i] || 0) + 1;
  }

  for (let k in result) {
    if (result[k] === 1) {
      return s.indexOf(k);
    }
  }

  return -1;
}

// let result = firstUniqChar('leetcode');
// let result = firstUniqChar('aabb');
let result = firstUniqChar('loveleetcode');

console.log(result);
