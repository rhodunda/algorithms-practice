
const numbers = [6]


const fizzBuzz = () => {
    for(let i = 0; i < numbers.length; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('fizz-buzz')
           
        } if(i % 3 == 0) {
            console.log('fizz')
           
    }if(i % 5 == 0) {
        console.log('buzz')
        
    }
}
}
console.log(numbers)

console.log(fizzBuzz(numbers))