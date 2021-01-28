
// reverse the integer

// const integer = 123


// function reverseInteger (int) {
//     const reverse = int.toString().split('').reverse().join('')

//     console.log(reverse)
// }

// reverseInteger(integer)



// return the integer reversed 
// if integer is over 32 bits return 0
const integer = 123

const reversed = (int) => {
    if(int < 0) return -1 * reverse(-int);
    const reversedString = int.toString().split('').reverse().join('')
    return (reverseString > 2**31 -1) ? 0 : reverseString
}
