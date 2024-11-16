// 1. Reverse a String:
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// console.log(reverseString("salom"));

// 2. Palindrome check
function palindromeCheck(str) {
  let sum = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      sum = true;
    } else {
      return false;
    }
  }
  return sum;
}

// console.log(palindromeCheck("assa"));
// console.log(palindromeCheck("asaa"));

// 3. Fin the maximum number
function findMaxNumber(arr) {
  let maxNum = 0;

  for (let number of arr) {
    if (number > maxNum) {
      maxNum = number;
    }
  }

  return maxNum;
}

// console.log(findMaxNumber([1, 2, 6, 3]));

// 4. factorial
function factorialCalculation(number) {
  let sum = 1;

  for(let i = 1; i <= number; i++) {
    sum *= i
  }

  return sum;
}

// console.log(factorialCalculation(3))

// 5. sum of all numbers
function sumOfAllNumbers(arr) {
  let sum = 0;
  sum = arr.reduce((sum, i) => sum + i, 0);

  return sum;
}

// console.log(sumOfAllNumbers([1, 2, 3, 4, 5]));

// 6. Count of vowels
function countOfVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
}

// console.log(countOfVowels("Hello World"));

// 7. Remove dumplicates
function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
}

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4]));

// 8. Find the second largest number
function findSecondLargestNumber(arr) {
  let maxNum = arr[0];
  let secondMaxNum = maxNum;

  for(let item of arr) {
    if(item > maxNum) {
      secondMaxNum = maxNum;
      maxNum = item;
    } else if(item < maxNum && item > secondMaxNum) {
      secondMaxNum = item;
    }
  }

  return secondMaxNum;
}

console.log(findSecondLargestNumber([1, 2, 6, 3]));

// 9. Merge the two sorted arrays
function mergeArrays(arr1, arr2) {
  const newArr = []

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

// 10. Check for prime number
function checkForPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}