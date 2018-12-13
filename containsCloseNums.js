/*
  Given an array of integers nums and an integer k,
  determine whether there are two distinct indices i and j in the array where
  nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.

  Example:
  For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
  containsCloseNums(nums, k) = true.
  There are two 2s in nums, and the absolute difference between their positions is exactly 3.

  For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be
  containsCloseNums(nums, k) = false.
  The absolute difference between the positions of the two 2s is 3, which is more than k.
*/
function containsCloseNums(nums, k) {
    const obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[`${nums[i]}`]) {
            obj[`${nums[i]}`].push(i);
        } else {
            obj[`${nums[i]}`] = [i];
        }
    }
    for(key in obj) {
        if(obj[key].length > 1) {
            for(let j = 0; j < obj[key].length; j++) {
                if(obj[key][j+1]) {
                    if(Math.abs(obj[key][j] - obj[key][j+1]) <= k) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
