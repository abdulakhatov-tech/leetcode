const isMatch = (s, p) => {
  const m = s.length;
  const n = p.length;

  // dp[i][j] = whether s[0..i-1] matches p[0..j-1]
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;

  // Handle patterns like a*, a*b*, a*b*c* that can match empty string
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        // Zero occurrences of previous char
        dp[i][j] = dp[i][j - 2];
        // One or more occurrences if preceding char matches
        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          dp[i][j] ||= dp[i - 1][j];
        }
      }
    }
  }

  return dp[m][n];
};
