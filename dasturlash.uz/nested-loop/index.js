const fn = (s) => {
    const options = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
  
    let result = 0;
  
    for(let i = 0; i < s.length; i++) {
      if(i > 0 && options[s[i]] > options[s[i - 1]]) {
        result += options[s[i]] - 2 * options[s[i - 1]]
      } else {
        result += options[s[i]]
      }
    }

    return result
  }
  
  console.log(fn('X'));