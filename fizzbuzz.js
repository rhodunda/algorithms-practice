
const numbers = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,50,150,1000,234,34,345,6554,676,786,5764,243444,5666,]


const fizzBuzz = () => {
    for(let i = 0; i < numbers.length; i++) {
        if(i / 3 == 0 && i / 6 == 0) {
            console.log('fizz-buzz')
        } if(i / 3 == 0) {
            console.log('fizz')
    }if(i / 6 == 0) {
        console.log('buzz')
    }if(i === undefined) {
        console.log('number undefined')
    }
}
}


console.log(fizzBuzz(numbers))