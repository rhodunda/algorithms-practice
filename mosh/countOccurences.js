const ar = [1,4,7,-10,100,7,44,2]


const count = (array) => {

    let numberOfCount = 0

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[i] === array[j])  {
                    numberOfCount++
                    console.log([array[i], array[j]])
            }
        
        }
    }
    return numberOfCount
}
console.log(`[counting occureces] ${count(ar)}`)

