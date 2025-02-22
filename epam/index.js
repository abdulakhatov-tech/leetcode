// 1. Two Sum
// Input: [2, 7, 11, 15], target = 9
// Output: [0, 1]

const twoSum = (nums, target) => {
  const map = new Map();

  for (let num of nums) {
    const a = target - num;

    if (map.has(a)) {
      return [a, num];
    }
    map.set(num, num);
  }
};

// console.log(twoSum([2, 7, 11, 15], 13))

// ==========================================================================================

// 2. Reverse a String
// Input: "hello"
// Output: "olleh"

const reverseAString = (str) => {
  let newStr = "";
  const length = str.length - 1;

  for (let i = 0; i <= length; i++) {
    newStr += str[length - i];
  }

  return newStr;
};

// console.log(reverseAString('hello'))

// ==========================================================================================
// 3. Palindrome Check
// Input: "racecar"
// Output: true

// Input: "hello"
// Output: false

const palindromeCheck = (str) => {
  let newStr = "";

  const length = str.length - 1;

  for (let i = 0; i <= length; i++) {
    newStr += str[length - i];
  }

  return str === newStr;
};

// console.log(palindromeCheck('racecar'))
// console.log(palindromeCheck('hello'))

// ==========================================================================================
// 4. Anagram Check
// Input: "listen", "silent"
// Output: true

// Input: "hello", "world"
// Output: false

const anagramCheck = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join() === str2.split("").sort().join();
};

// console.log(anagramCheck('listen', 'silent'))
// console.log(anagramCheck('hello', 'world'))

// ==========================================================================================
// 5. FizzBuzz
// Input: 15
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

const fizzBuzz = (num) => {
  let result = "";

  for (let i = 1; i <= num; i++) {
    const validation = i === num ? "" : ", ";

    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz" + validation;
    } else if (i % 3 === 0) {
      result += "Fizz" + validation;
    } else if (i % 5 === 0) {
      result += "Buzz" + validation;
    } else {
      result += i + validation;
    }
  }

  return result;
};

// console.log(fizzBuzz(15));

// ==========================================================================================
// 6. Find the Largest Number in an Array
// Input: [3, 1, 4, 1, 5, 9]
// Output: 9

const findTheLargestNumberInArray = (arr) => {
  let maxNumber = arr[0];

  for (let num of arr) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }

  return maxNumber;
};

// console.log(findTheLargestNumberInArray([3, 1, 4, 1, 5, 9]));

// ==========================================================================================
// 7. Array Chunking
// Input: [1, 2, 3, 4, 5, 6, 7], size = 2
// Output: [[1, 2], [3, 4], [5, 6], [7]]

const arrayChunking = (arr, size) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
};

// console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 4));

// ==========================================================================================
// 8. Flatten Nested Arrays
// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]

const flattenNestedArrays = (arr) => arr.flat(Infinity);

// console.log(flattenNestedArrays([1, [2, [3, 4]], 5]));

// ==========================================================================================
// 9. First Non-Repeating Character
// Input: "swiss"
// Output: "w"

const firstNonRepeatingCharacter = (str) => {
  const map = new Map();

  for (let char of str) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      const counter = map.get(char) ? map.get(char) + 1 : 1;
      map.set(char, counter);
    }
  }

  for (let i of map) {
    if (i[1] === 1) {
      return i[0];
    }
  }

  return map;
};

// console.log(firstNonRepeatingCharacter("swiss"));
// console.log(firstNonRepeatingCharacter("swwissai"));

// ==========================================================================================
// 10. Queue Using Stacks
// Input: enqueue(1), enqueue(2), enqueue(3), dequeue()
// Output: 1

const createQueue = () => {
  const stack1 = [];
  const stack2 = [];

  return {
    enqueue: function (num) {
      stack1.push(num);
    },
    dequeue: function () {
      if (stack2.length === 0) {
        while (stack1.length > 0) {
          stack2.push(stack1.pop());
        }
      }

      return stack2.pop() || null;
    },
  };
};

const queue = createQueue();

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// console.log(queue.dequeue())
// console.log(queue.dequeue())

// ==========================================================================================
// 11. Merge Two Sorted Arrays
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

const mergeTwoSortedArrays = (arr1, arr2) =>
  [...arr1, ...arr2].sort((x, y) => x - y);

// console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6]))

// ==========================================================================================
// 13. Find the Missing Number in an Array
// Input: [1, 2, 4, 5]
// Output: 3

const findMissingNumberInArray = (arr) => {
  for (let i = 0; i < arr[arr.length - 1] - 1; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
};

// console.log(findMissingNumberInArray([1, 2, 4, 5]));
// console.log(findMissingNumberInArray([1, 3, 4, 5]));

// ==========================================================================================
// 14. Find Duplicates in an Array
// Input: [1, 2, 3, 4, 2, 3, 5]
// Output: [2, 3]

const findDuplicates = (arr) => {
  const map = new Map();
  const newArr = [];

  for (let num of arr) {
    if (!map.has(num)) {
      map.set(num, num);
    } else {
      newArr.push(num);
    }
  }

  return newArr;
};

// console.log(findDuplicates([1, 2, 3, 4, 2, 3, 5]));

// ==========================================================================================
// 15. Implement a Stack
// Input: push(10), push(20), pop()
// Output: 20

const stackFn = () => {
  const stack = [];

  return {
    push: function (num) {
      stack.push(num);
    },
    pop: function () {
      return stack.pop();
    },
  };
};

// const stack = stackFn()
// stack.push(10)
// stack.push(20)
// console.log(stack.pop())

// ==========================================================================================
// 16. Find Factorial of a Number
// Input: 5
// Output: 120

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// console.log(factorial(5))

// ==========================================================================================
// 17. Find Fibonacci Number
// Input: 6
// Output: 8

const fibonacci = (num) => {
  let arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[arr.length - 1];
};

// console.log(fibonacci(6))

// ==========================================================================================
// 18. Check for Prime Number
// Input: 7
// Output: true

// Input: 10
// Output: false

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// console.log(isPrime(7))
// console.log(isPrime(10))

// ==========================================================================================
// 19. Count Vowels in a String
// Input: "hello world"
// Output: 3

const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
};

// console.log(countVowels('hello world'));

// ==========================================================================================
// 20. Find the Longest Word in a Sentence
// Input: "The quick brown fox"
// Output: "quick"

const findLongestWord = (word) => {
  return word.split(" ").sort()[word.split(" ").length - 1];
};

// console.log(findLongestWord('The quick brown fox'));

// ==========================================================================================
// 21. Capitalize First Letter of Each Word
// Input: "hello world"
// Output: "Hello World"

// ==========================================================================================
// 21. Capitalize First Letter of Each Word
// Input: "hello world"
// Output: "Hello World"

const capitalizeFirstLetterOfEachWord = (sentence) =>
  sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

// console.log(capitalizeFirstLetterOfEachWord('hello world'));

// ==========================================================================================
// 22. Sum of Digits of a Number
// Input: 12345
// Output: 15

const sumOfDigitsOfANumber = (num) => {
  let sum = 0;

  for (let n of num.toString()) {
    sum += +n;
  }

  return sum;
};

// console.log(sumOfDigitsOfANumber(12345))

// ==========================================================================================
// 23. Check if Two Strings are Rotations of Each Other
// Input: "hello", "lohel"
// Output: true

const isStringsRotations = (str1, str2) =>
  str1.split("").sort().join() === str2.split("").sort().join();

// console.log(isStringsRotations('hello', 'lohel'));

// ==========================================================================================
// 24. Count the Occurrences of Each Character in a String
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

const countOfEachChar = (str) => {
  const result = {};

  for (let char of str) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }

  return result;
};

// console.log(countOfEachChar('hello'));

// ==========================================================================================
// 26. Longest Common Prefix
// Input: ["flower", "flow", "flight"]
// Output: "fl"

const findLongestCommonPrefix = (arr) => {};

// console.log(findLongestCommonPrefix(["flower", "flow", "flight"]));

// ==========================================================================================
// 27. Remove Duplicates from an Array
// Input: [1, 2, 3, 4, 2, 3, 5]
// Output: [1, 2, 3, 4, 5]

const removeDumplicates = (arr) => {
  const newArr = [];

  for (let num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }

  return newArr;
};

// console.log(removeDumplicates([1,2,3,4,2,3,5]))

// ==========================================================================================
// 28. Find Intersection of Two Arrays
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

const findIntersectionOfTwoArray = (arr1, arr2) => {
  const intersection = {};
  const result = [];
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < length; i++) {
    intersection[arr1[i]] = intersection[arr1[i]] ? ++intersection[arr1[i]] : 1;
    intersection[arr2[i]] = intersection[arr2[i]] ? ++intersection[arr2[i]] : 1;
  }

  for (let item in intersection) {
    if (intersection[item] > 1) {
      result.push(+item);
    }
  }

  return result;
};

// console.log(findIntersectionOfTwoArray([1, 2, 3, 4], [3, 4, 5, 6]));

// ==========================================================================================
// 29. Find the Mode (Most Frequent Element) in an Array
// Input: [1, 2, 2, 3, 4, 4, 4, 5]
// Output: 4

const mostFrequentElement = (arr) => {
  const obj = {};

  for(let num of arr) {
    if(!obj[num]) {
      obj[num] = 1;
    }
    obj[num]++
  }

  let max = { value: 0 };

  for(let item in obj) {
    if(obj[item] > max.value) {
      max.key = item
      max.value = obj[item]
    }
  }


  return +max.key
}

// console.log(mostFrequentElement([1, 2, 2, 3, 4, 4, 4, 5]))

// ==========================================================================================
const findGreatestCommonDivisor = (num1, num2) => {
  const length = num1 > num2 ? num2 : num1;
  let max = 1;

  for(let i = 1; i < length; i++) {
    if(num1 % i === 0 && num2 % i === 0) {
      if(i > max) {
        max = i
      }
    }
  }

  return max
};

// console.log(findGreatestCommonDivisor(48, 18))

// ==========================================================================================
// 1. Reverse Words in a String
// Input: "hello world"
// Output: "world hello"

const reverseWords = (str) => {
  let newStr = '';

  for(let i = 0; i < str.split(' ').length; i++) {
    newStr += str.split(' ')[str.split(' ').length - 1 - i] + ' '
  }

  return newStr.trim()
}

// console.log(reverseWords("hello world"))

// ==========================================================================================