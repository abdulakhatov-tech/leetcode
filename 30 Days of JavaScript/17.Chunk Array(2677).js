// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of
// subarrays each of length size. The length of the last subarray may be
// less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

function chunk(arr, size) {
  try {
    if (!JSON.parse(JSON.stringify(arr)))
      throw new Error('Array is invalid JSON');
    if (
      2 <= JSON.stringify(arr).length &&
      JSON.stringify(arr) <= Math.pow(10, 5)
    )
      throw new Error('Arr length must be between 2 and 100000');
    if (!(1 <= size && size <= arr.length + 1))
      throw new Error(`Size must be between 1 and ${arr.length + 1}`);

    let chunkedArr = [];
    let iteration_count = Math.ceil(arr.length / size);
    let subIndex = 0;

    for (let i = 0; i < iteration_count; i++) {
      chunkedArr = [...chunkedArr, arr.slice(subIndex, size * (i + 1))];
      subIndex += size;
    }

    return chunkedArr;
  } catch (error) {
    console.log(error.name + ': ' + error.message);
  }
}

console.log(chunk([1, 2, 3, 4], 6));
