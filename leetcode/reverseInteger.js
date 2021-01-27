
// reverse the integer

const integer = 123


function reverseInteger (int) {
    const reverse = int.toString().split('').reverse().join('')

    console.log(reverse)
}


reverseInteger(integer)