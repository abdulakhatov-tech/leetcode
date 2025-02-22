// -------------------- 1 ----------------------
const countWords = (text) => {
  const map = new Map();

  for (let item of text.split(" ")) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  return map;
};

// console.log(countWords("apple banana apple orange banana apple"));

// -------------------- 2 ----------------------
const firstUniqueChar = (text) => {
  const map = new Map();

  for (let char of text.split("")) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (let i of map) {
    if (i[1] === 1) {
      return i[0];
    }
  }
};

// console.log(firstUniqueChar("swiss"));

// -------------------- 3 ----------------------
const groupByFrequency = (arr) => {
  const map = new Map();

  for (let char of arr) {
    if (!map.has(char)) {
      map.set(char, [char]);
    } else {
      map.set(char, [...map.get(char), char]);
    }
  }

  return map;
};

// console.log(groupByFrequency([1, 2, 2, 3, 3, 3]));

// -------------------- 4 ----------------------
const findDuplicates = (arr) => {
    const map = new Map();
    const result = []

    for(let item of arr) {
        if(!map.has(item)) {
            map.set(item, 1)
        } else {
            map.set(item, map.get(item) + 1)
        }
    }

    for(let item of map) {
        if(item[1] > 1) {
            result.push(item[0])
        }
    }

    return result
}

// console.log(findDuplicates([4, 5, 6, 4, 5, 7]))

// -------------------- 1 ----------------------
const twoSum = (arr, target) => {
    const map = new Map();

    for(let item of arr) {
        let complement = target - item;

        if(map.has(complement)) {
            return [complement, item]
        }

        map.set(item, item)
    }
}

// console.log(twoSum([2, 7, 11, 15], 13))
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 15], 17))

// -------------------- 1 ----------------------
const memoize = (fn) => {
    const map = new Map();

    return function(num) {
        if(!map.has(num)) {
            map.set(num, fn(num))
        } 

        return map.get(num)
    }
}

const cached = memoize((x) => x * x);
// console.log(cached(5)); // Computes and stores 25
// console.log(cached(5)); // Returns cached value 25

// -------------------- 1 ----------------------
const findCommon = (arr1, arr2) => {
    const map = new Map();
    let result = []

    for(let i = 0; i < arr1.length; i++) {
        for(let k = 0; k <arr2.length; k++) {
            if(arr1[i] == arr2[k]) {
                if(!map.has(arr1[i])) {
                    map.set(arr1[i])
                }
            }
        }
    }

    for(let item of map) {
        result.push(item[0])
    }

    return result
}

// console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6]))
// -------------------- 1 ----------------------
// -------------------- 1 ----------------------
// -------------------- 1 ----------------------
// -------------------- 1 ----------------------
// -------------------- 1 ----------------------
// -------------------- 1 ----------------------
// -------------------- 1 ----------------------
// -------------------- 1 ----------------------

