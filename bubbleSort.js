let unsortedArray = [4, 3, 2, 1, 150, -10]


const bubbleSort = (array) => {
    let len = array.length
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++ ) {
            if(array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}
console.log('[bubble sort.js] bubble sort')
console.log(bubbleSort(unsortedArray))
console.log('---------------')