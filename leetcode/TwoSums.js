const nums = [1,2,3,4,5]
const target = 9


const TwoSums = (nums, target) => {
let len = nums.length

for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
        if(target - nums[i] === nums[j]) {
            return [i, j]
        }
    }
}
}

console.log(`[two sums] ${TwoSums(nums,target)}`)
