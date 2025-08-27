/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];

    function build(str, open, close) {
        // str = current string
        // open = how many "(" left to use
        // close = how many ")" left to use

        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        // add "(" if we still have some
        if (open > 0) {
            build(str + "(", open - 1, close);
        }

        // add ")" only if we have more ")" left than "("
        if (close > open) {
            build(str + ")", open, close - 1);
        }
    }

    build("", n, n); // start with n "(" and n ")"
    return result;
};