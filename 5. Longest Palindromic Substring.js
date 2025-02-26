// #1
// function longestPalindrome(str) {
//   if(!str || str.length < 2) return str

//   let arr = [];
//   let subStr = "";
//   let subStr2 = ""

//   for (let i = 0; i < str.length; i++) {
//     for (let k = i; k < str.length; k++) {
//       subStr += str[k];
//       subStr2 = str[k] + subStr2

//       if(subStr === subStr2) {
//         arr.push(subStr);
//       }
//     }

//     subStr = '';
//     subStr2 = '';
//   }

//   subStr=''
//   // arr.push(subStr);

//   let result = arr.sort((x,y) => y.length - x.length)[0];

//   return result;
// }

// #2
function longestPalindrome(str) {
  if (!str || str.length < 2) return str;

  let start = 0;
  let maxLength = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return right - left - 1;
  };

  for (let i = 0; i < str.length; i++) {
    let length1 = expandAroundCenter(i, i);
    let length2 = expandAroundCenter(i, i + 1);
    let length = Math.max(length1, length2);

    if (length > maxLength) {
      maxLength = length;
      start = i - Math.floor((length - 1) / 2);
    }
  }

  return str.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("ac")); // a
console.log(longestPalindrome("ccc")); // ccc
console.log(longestPalindrome("c")); // ccc
console.log(
  longestPalindrome(
    "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"
  )
); // ccc
