// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return '';
  }

  strs = strs.sort();

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  let result = '';
  for (let i = 0; i < firstStr.length; i++) {
    if (lastStr.length > i && firstStr[i] === lastStr[i]) {
      result += firstStr[i];
    } else {
      break;
    }
  }

  return result;
}

const result_1 = longestCommonPrefix(['flower', 'flow', 'flight']);
const result_2 = longestCommonPrefix(['dog', 'racecar', 'car']);

console.log(result_1, result_2);
