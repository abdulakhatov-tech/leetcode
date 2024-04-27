function reverseStr(s, k) {
  let result = '';

  for (let i = 0; i < s.length; i += 2 * k) {
    // Reverse the first k characters
    const reversedChunk = s
      .slice(i, i + k)
      .split('')
      .reverse()
      .join('');
    // Append the reversed chunk and the remaining characters
    result += reversedChunk + s.slice(i + k, i + 2 * k);
  }

  return result;
}
