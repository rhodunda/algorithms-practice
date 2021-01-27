

let givenArray = [1,1,3,4,67,100,100,50]


const removeDuplicates = (nums) => {
let count = 0
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i] === nums[i + 1]) {
            count += 1
        }
    }
       return count
}

console.log(removeDuplicates(givenArray))