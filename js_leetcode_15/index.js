let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];

var threeSum = function (nums) {
  if (nums.length >= 3 && nums.length <= 3000) {
    let result = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= -Math.pow(10, 5) && nums[i] <= Math.pow(10, 5)) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
          if (i != j && i != k && j != k) {
            let x = nums[i] + nums[j] + nums[k];
            if (x == 0) {
              result.push([nums[i], nums[j], nums[k]].sort());
              j++;
              k--;
            } else if (x > 0) {
              k--;
            } else if (x < 0) {
              j++;
            }
          }
        }
      }
    }

    return result;
  }
};

console.log(threeSum(nums));

/**
 * Test case
 * [-1, 0, 1, 2, -1, -4] = [[-1,-1,2],[-1,0,1]]
 * [0,1,1] = []
 * [0,0,0] = [[0,0,0]]
 * [-1,0,1,2,-1,-4,-2,-3,3,0,4] = [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
 *
 */

/*

    if (nums.length >= 3 && nums.length <= 3000) {
    let result = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= -Math.pow(10, 5) && nums[i] <= Math.pow(10, 5)) {
        for (let j = i + 1; j < nums.length; j++) {
          for (let k = nums.length - 1; k > i; k--) {
            let summ = 0;
            if (i != j && i != k && j != k) {
              let x = nums[i] + nums[j] + nums[k];
              if (x == summ) {
                result.push([nums[i], nums[j], nums[k]].sort());
              }
            }
          }
        }
      }
    }

    return result
      .map(JSON.stringify)
      .filter((e, i, a) => i === a.indexOf(e))
      .map(JSON.parse);
  }

*/
