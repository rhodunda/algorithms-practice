

const number = 121

// return true if the number reads the same forward as backwards
// else return false

const isPalindrome = (num) => {
console.log('-----')
 let numString = JSON.stringify(num)
let splitString = numString.split('')
let reverseNum = splitString.reverse()

let isTrue = 0
for(let i = 0; i < splitString.length; i++){
    for(let j = 0; j < reverseNum.length; j++) {
        if(splitString[i] !== reverseNum[j]) {
            isTrue += 1
            console.log('test')
            console.log(i, j)
            console.log('----')
        }
    }
}
if(isTrue === 0 ? console.log(true) : console.log(false) )

console.log('-----')
}

console.log(isPalindrome(number))