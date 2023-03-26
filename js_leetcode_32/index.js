/**
 Given a string containing just the characters '(' and ')', return the length of the longest valid 
 (well-formed) parentheses substring.

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0
 */

let s = "(()(()";

var longestValidParentheses = function (s) {
  let l = 0;
  let r = 0;
  let count = 0;
  for (let i = 0; i < s.split("").length; i++) {
    if (s[i] == "(") {
      l++;
    }
    if (s[i] == ")") {
      r++;
    }
    if (l == r) {
      count = Math.max(count, l + r);
    }
    if (r > l) {
      l = r = 0;
    }
  }
  l = r = 0;
  for (let i = s.split("").length - 1; i >= 0; i--) {
    if (s[i] == "(") {
      l++;
    }
    if (s[i] == ")") {
      r++;
    }
    if (l == r) {
      count = Math.max(count, l + r);
    }
    if (l > r) {
      l = r = 0;
    }
  }

  return count;
};

console.log(longestValidParentheses(s));
