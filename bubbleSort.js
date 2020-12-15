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

const add_bubble = () => {
    const detail = document.querySelector('.detail')

   let x;

   const unsortedHeading = document.createElement('h2')
   unsortedHeading.innerText =  "unsorted array"
   detail.appendChild(unsortedHeading)

   const unsortedBox = document.createElement('div')
   unsortedBox.className = "unsortedbox"
   detail.appendChild(unsortedBox)

   for(x of unsortedArray) {
        let unsortedNum = document.createElement('h3')
        unsortedNum.className = "unsortedNum"
        unsortedNum.innerText = x
        unsortedBox.appendChild(unsortedNum)
   }
       
    

    let array = bubbleSort(unsortedArray)
    for(i = 0; i < array.length; i++) {
            let arrayNum = document.createElement('div')
            arrayNum.innerText = i


    }
}
// console.log('[bubble sort.js] bubble sort')
// console.log(bubbleSort(unsortedArray))
// console.log('---------------')