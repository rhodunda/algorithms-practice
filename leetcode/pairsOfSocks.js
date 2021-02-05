
// return number of pairs

const sockArray = [1,2,4,1,2,3,2,3,2]


const findPairs = (arr) => {
let pairs = 0

const sortedSockArray = arr.sort()

for(let i = 0; i < sortedSockArray.length; i++) {
    if(sortedSockArray[i] === sortedSockArray[i + 1]) {
        pairs += 1
        i++
    }
}
return pairs
}

console.log(findPairs(sockArray))