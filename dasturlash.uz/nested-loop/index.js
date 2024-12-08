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

// const fn = (n) => {
//   let result = '';

//   for(let i = 1; i <= n; i++){
//     for(let k = 1; k <= n; k++) {
//       if(i === 1 || i=== n) {
//         result += '*'
//       } else {
//         if(k === 1 || k === n) {
//           result += '*'
//         } else {
//           result += ' '
//         }
//       }
//     }
//     result += '\n'
//   }

//   return result
// }

// console.log(fn(5))

// 16. Diaganal va uchburchaklar

// const fn = (n) => {
//   let result = "";

//   for (let i = 1; i <= n; i++) {
//     for (let k = 1; k <= n; k++) {
//       if (i === k) {
//         result += "*";
//       } else if (i !== k && i > k) {
//         result += "-";
//       } else {
//         result += "+";
//       }
//     }
//     result += "\n";
//   }
//   return result;
// };

// console.log(fn(15));

// 17. Yulduzli x

// const fn = (n) => {
//   let result = "";

//   for(let i = 1; i <= n; i++) {
//     for(let k = 1; k <= n; k++) {
//       if(i === k || k === n - (i - 1)) {
//         result += '*'
//       }
//       else {
//         result += ' '
//       }
//     }
//     result += "\n";
//   }

//   return result
// }

// console.log(fn(15));

// 18. Teskari parallelogram
// const fn = (n) => {
//   let result = "";

//   for (let i = 1; i <= n; i++) {
//     result += " ".repeat(n - i);
//     for (let k = 1; k <= n; k++) {
//       result +='*'
//     }
//     result += "\n";
//   }

//   return result;
// };

// console.log(fn(15));

// 19. G'alati parallelogram
// const fn = (n) => {
//   let result = "";

//   for (let i = 1; i <= n; i++) {
//     result += " ".repeat(n - i);
//     for (let k = 1; k <= n; k++) {
//         if(i===1 || i===n) {
//           result +='*'
//         } else {
//           if(k===1 || k === n) {
//             result += '*'
//           } else {
//             result += ' '
//           }
//         }

//     }
//     result += "\n";
//   }

//   return result;
// };

// console.log(fn(15));

// 20. Uchburchak

// const fn = (n) => {
//   let result = '';

//   for(let i = 1; i <= n; i++) {
//     let line = '';

//     for(let j = 0; j < n - i; j++) {
//       line += ' '
//     }

//     for(let j = 0; j < i; j++) {
//       line += '* '
//     }
//     result += line + '\n'
//   }

//   return result
// }

// console.log(fn(5));

// 21. Teskari uchburchak

// const fn = (n) => {
//   let result = "";

//   for (let i = n; i > 0; i--) {
//     for (let j = 0; j < n - i; j++) {
//       result += " ";
//     }

//     for (let k = i; k > 0; k--) {
//       result += "* ";
//     }

//     result += "\n";
//   }

//   return result;
// };

// console.log(fn(5));

// 22. Uchburchak karkazi

const fn = (n) => {
    let result = ''

    for(let i = n; i >= 1; i--) {
        for(let k = 1; k <= n - i; k++) {
            result += ' '
        }

        for(let j = i; j >= 1; j--) {
            if(i === 1 || i === n || j === i || j === 1) {
                result += `*`
            } else {
                result += ' '
            }
        }
        result += '\n'
    }


    return result
}

console.log(fn(5));