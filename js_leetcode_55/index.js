/**
 You are given an integer array nums. You are initially positioned at the array's first index, 
 and each element in the array represents your maximum jump length at that position.
 Return true if you can reach the last index, or false otherwise.

 Example 1:
 Input: nums = [2,3,1,1,4]
 Output: true
 Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

 Example 2:
 Input: nums = [3,2,1,0,4]
 Output: false
 Explanation: You will always arrive at index 3 no matter what. 
 Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

let nums = [1, 0, 1, 0];

var canJump = function (nums) {
  let start;
  if (nums.length <= 1) return true;
  if (nums.length <= 100000 && nums.length >= 1) {
    nums.forEach((element) => {
      if (element >= 0 && element <= 1000000) start = true;
    });
  }
  if (start == true) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[0] <= i && nums[i] == 0) {
        return false;
      }
      if (nums[i] + i > nums[0]) {
        nums[0] = nums[i] + i;
      }
      if (nums[0] >= nums.length - 1) {
        return true;
      }
    }
    return false;
  }
};

//canJump(nums);
console.log(canJump(nums));

// Tests
//2,3,1,1,4
//3,2,1,0,4
//2,0
//0,1
//0,2,3
//2,0,0
//1,0,1,0

/**
 let jump = nums[0];
  let len = nums.length;
  if (len <= 1) return true;
  let start = false;
  if (len <= 100000 && len >= 1) {
    nums.forEach((element) => {
      if (element >= 0 && element <= 1000000) start = true;
    });
  }
  if (start == true) {
    for (let i = 0; i < nums.length; i++) {
      if (jump <= i && nums[i] == 0) {
        return false;
      }
      if (nums[i] + i > jump) {
        jump = nums[i] + i;
      }
      if (jump >= nums.length - 1) {
        return true;
      }
    }
    return false;
  }
 */
