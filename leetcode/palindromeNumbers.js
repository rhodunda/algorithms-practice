const number = 123


// return true if the number is a palindrome
// else return false

const isPalindrome = (num) => {
    let reverse = num.toString().split("").reverse().join("")

    if (num.toString() === reverse) 
        return true

    else return false
}

console.log(isPalindrome(number))