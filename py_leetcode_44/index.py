
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
            print(sList, pList)
            for i, x in enumerate(sList):
                for i1, x1 in enumerate(pList):
                    if x1 == "*":
                        print("x1==*: ", x1)
                        resBool = True
                        if pList[1] == None:
                            break
                    if x != x1:
                        if x1 != "?":
                            print("x!=x1 and x1!=?: ", x, x1)
                            resBool = False
                            break
                else:
                    continue
                break
            setS = set(sList) & set(pList)
            setRes = set(pList)-setS
            if list(setRes)[1] == "*":
                resBool = True

            return resBool


result = Solution()
print(result.isMatch("adceb", "*a*b"))
