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
function longestPalindrome(s) {
  if (!s || s.length < 2) return s;

  let longest = s[0];

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandAroundCenter(i, i);
    let evenPalindrome = expandAroundCenter(i, i + 1);

    let biggerPalindrome =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;

    if (biggerPalindrome.length > longest.length) {
      longest = biggerPalindrome;
    }
  }

  return longest;
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
