

const numArray = [1,3,5,7,9]


const getMax = (array) => {
    let max = 0
    for(let i = 0; i < array.length; i++) {
            if(array[i] > max) {
                max = array[i]
            }
    }
    return max
}

console.log(`[get max] ${getMax(numArray)}`)