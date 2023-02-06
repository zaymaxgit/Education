'''
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Partial solution!
'''


class Solution:
    def strLowerEnd(s: str, p: str) -> bool:
        res = False
        for i, x in enumerate(s):
            if x == x.lower() and x in 'abcdefghijklmnopqrstuvwxyz':
                res = True
        for i, x in enumerate(p):
            if x == x.lower() and x in 'abcdefghijklmnopqrstuvwxyz*?':
                res = True
        return res

    def isMatch(self, s: str, p: str) -> bool:
        resBool = True
        if len(s) >= 0 and len(p) <= 2000 and Solution.strLowerEnd(s, p):
            sList = list(s)[0:len(s)]
            pList = [None]*len(s)

            for x in range(len(p)):
                pList.insert(x, p[x])
            pList = pList[:len(s)]
            setS = set(sList) & set(pList)
            setRes = set(pList)-setS
            if (list(setRes)[0] == "*" or list(setRes)[1] == "*") and len(sList) == len(pList):
                resBool = False
                return resBool
            if list(setRes)[0] == "*" or list(setRes)[1] == "*":
                return resBool
            for i, x in enumerate(sList):
                for i1, x1 in enumerate(pList):
                    if x1 == "*":
                        resBool = True
                        if pList[1] == None:
                            break
                    if x != x1:
                        if x1 != "?":
                            resBool = False
                            break
                else:
                    continue
                break

            return resBool


result = Solution()
print(result.isMatch("acdcb", "a*c?b"))
