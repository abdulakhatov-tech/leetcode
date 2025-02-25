const findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((x, y) => x - y);
  let length = arr.length;

  let sum =
    length % 2 === 0
      ? (arr[length / 2 - 1] + arr[length / 2]) / 2
      : arr[Math.floor(length / 2)];

  return sum;
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2.0000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.50000
