// ========================================== 1 ==========================================
const mergeAlternately = function (word1, word2) {
  let result = "";

  const length = word1.length >= word2.length ? word1.length : word2.length;

  for (let i = 0; i < length; i++) {
    result += (word1[i] ?? "") + (word2[i] ?? "");
  }

  return result;
};

// console.log(mergeAlternately("abc", "pqr"))
// console.log(mergeAlternately("ab", "pqrs"))
// console.log(mergeAlternately("abcd", "pq"))

// ========================================== 2 ==========================================
const gcdOfStrings = function (str1, str2) {
  let result = "";

  



  return result;
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABCDEF", "ABC"));

// ========================================== 3 ==========================================
// ========================================== 4 ==========================================
// ========================================== 5 ==========================================
// ========================================== 6 ==========================================
// ========================================== 7 ==========================================
// ========================================== 8 ==========================================
