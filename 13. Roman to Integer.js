var romanToInt = function(s) {
    const valMap = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
    };
  
    let i = 0;
    let total = 0;
  
    while(i < s.length) {
      if(i + 1 < s.length && valMap[s.substring(i, i + 2)]) {
        total += valMap[s.substring(i, i + 2)];
        i += 2; 
      } else {
        total += valMap[s[i]];
        i += 1; 
      }
    }
  
    return total
  };
  
  console.log(romanToInt("III")); // Output: 3
  console.log(romanToInt("LVIII")); // Output: 58
  console.log(romanToInt("MCMXCIV")); // Output: 1994
  console.log(romanToInt("XLII")); // Output: 42
  console.log(romanToInt("MCMXCIV")); // Output: 1994