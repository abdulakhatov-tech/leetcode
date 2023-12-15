// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  try {
    let stack = [];
    characters = {
      '(': ')',
      '{': '}',
      '[': ']',
    };

    for (let i = 0; i < s.length; i++) {
      // Checking whether s consists of only ()[]{} or not
      if (!['(', ')', '{', '}', '[', ']'].includes(s[i]))
        throw new Error('s consists of parentheses only ()[]{}');
      // 1 <= s.length <= 104
      if (!(1 <= s.length && s.length <= Math.pow(10, 4)))
        throw new Error('1 <= s.length <= 10000');

      // Core
      if (characters[s[i]]) {
        stack.push(s[i]);
      } else {
        if (stack.length === 0 || s[i] !== characters[stack.pop()]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  } catch (error) {
    console.log(error.message);
  }
}

let result = isValid('()');
console.log(result);

result = isValid('{}');
console.log(result);

result = isValid('()[]{}');
console.log(result);

result = isValid('()[]{}');
console.log(result);
