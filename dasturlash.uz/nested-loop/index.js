
// 14. parallelogram
// const fn = (n) => {
//   let result = '';

//   for(let i = 0; i < n; i++){
//     for(let k = 0; k < n; k++) {
//       result += '*'
//     }
//     result += '\n' + ' '.repeat(i + 1)
//   }

//   return result
// }

// console.log(fn(5))


// 15. To'rtburchak qolibi

const fn = (n) => {
  let result = '';

  for(let i = 1; i <= n; i++){
    for(let k = 1; k <= n; k++) {
      if(i === 1 || i=== n) {
        result += '*'
      } else {
        if(k === 1 || k === n) {
          result += '*'
        } else {
          result += ' '
        }
      }
    }
    result += '\n'
  }

  return result
}

console.log(fn(5))
