
// add mulitples of 3 and 5  to limit

function sum(limit) {

    let count = 0

for(let i = 0; i <= limit; i++) {
    if( i % 3 === 0 || i % 5 === 0)
        count += i
}
    return count



}

console.log(`[multiples] ${sum(10)}`)