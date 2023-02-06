'''
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
'''
from typing import List


nums1 = [1, 2]
nums2 = [3]


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = nums1 + nums2
        nums.sort()
        if len(nums) % 2 == 0:
            numsIndex = (len(nums))//2
            res = (nums[numsIndex] + nums[numsIndex-1])/2
        else:
            numsIndex = (len(nums))//2
            res = nums[numsIndex]
        return float(res)


res = Solution()
##print(res.findMedianSortedArrays(nums1, nums2))
