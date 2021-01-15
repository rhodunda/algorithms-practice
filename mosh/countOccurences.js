const ar = [1,4,7,-10,100,7,44,2, 4, 5, 5]

// not working if there is three of the same number

const count = (array) => {

    let numberOfCount = 0
    const sortedArray = array.sort()
    for(let i = 0; i < sortedArray.length; i++) {
            if(sortedArray[i] === sortedArray[i + 1])  {
                    numberOfCount++
                    
            }
        
        
    }
    return numberOfCount
}
console.log(`[counting occureces] ${count(ar)}`)

