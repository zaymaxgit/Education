'''
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
'''


class Solution:
    def reverse(self, x: int) -> int:
        if x > -2**31 and x < (2**31)-1:
            s = str(x)
            if s[0] == "-":
                rev = -int(s[1:][::-1])
                return rev
            else:
                return int(s[::-1])
        else:
            return 0


result = Solution()
# print(result.reverse(120))
