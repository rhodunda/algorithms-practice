
const numbers = 15


// if the input is divisable by 3 => fizz
// if the input is divisable by 5 => buzz
// if the input is divisable by 3 and 5  => fizzbuzz
// if the input is not divisable by 3 or 5 => return the input
// if the input is NAN true undefined 

const fizzBuzz = (num) => {
    if(typeof num !== 'number') 
        return NaN
    
    if((num % 3 === 0) && (num % 5 === 0)) 
        return 'FizzBuzz'  

    if(num % 3 === 0) 
        return 'Fizz'

    if (num % 5 === 0) 
        return 'Buzz'
    
        return num

}
    


console.log(`[fizzBuzz] ${fizzBuzz(numbers)}`)