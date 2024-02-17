function strStr(haystack, needle) {
  let res = haystack.split().findIndex((el) => el.includes(needle));
  return res;
}

let result = strStr((haystack = 'sadbutsad'), (needle = 'sad'));
console.log(result);
