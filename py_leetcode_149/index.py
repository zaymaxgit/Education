'''
Given an array of points where points[i] = [xi, yi] 
represents a point on the X-Y plane, return the maximum 
number of points that lie on the same straight line.

Example 1:
Input: points = [[1,1],[2,2],[3,3]]
Output: 3

Example 2:
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
'''

from typing import List
import math
from collections import defaultdict


class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        if len(points) >= 1 and len(points) <= 300:
            x = False
            for i in range(len(points)):
                for y in range(len(points[i])):
                    if len(points[i]) == 2 and points[i][y] >= -0.0001 and points[i][y] <= 1000:
                        x = True
            if x == True:
                points.sort()
                score = 0
                dct = defaultdict(int)
                for i, (x1, y1) in enumerate(points):
                    dct.clear()
                    for x2, y2 in points[i+1:]:
                        dx, dy = x2-x1, y2-y1
                        G = math.gcd(dx, dy)
                        m = (dx//G, dy//G)
                        dct[m] += 1
                        if dct[m] > score:
                            score = dct[m]
                return score+1


res = Solution()
print(res.maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))
print(res.maxPoints([[1, 1], [2, 2], [3, 3]]))
