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

    const unsortedHeading = document.createElement('h2')
    unsortedHeading.innerText =  "unsorted array"
    unsortedHeading.className = "heading"
    detail.appendChild(unsortedHeading)
    
    const unsortedBox = document.createElement('div')
    unsortedBox.className = "unsortedbox"
    detail.appendChild(unsortedBox)

    const sortButton = document.createElement('button')
    sortButton.className = "sortbutton"
    sortButton.innerText = 'Sort'
    detail.appendChild(sortButton)
    sortButton.addEventListener('click', function() {
        sortClickHandler(event)
    })
    
    
    let x;
    for(x of unsortedArray) {
        let unsortedNum = document.createElement('div')
        unsortedNum.className = "unsortedNum"
        unsortedNum.innerText = x
        unsortedBox.appendChild(unsortedNum)
   }

}

const sortClickHandler = (event) => {
    let sortedArr = document.querySelector('.unsortedbox')
    sortedArr.innerHTML = ''

let array = bubbleSort(unsortedArray)

for(num of array) {
    let sorted = document.createElement('div')
    sorted.className = "sortedNum"
    sorted.innerText = num 
    sortedArr.appendChild(sorted)
                }
    let heading = document.querySelector('.heading')
    heading.innerText = ""
    heading.innerText = 'Sorted'


}










// console.log('[bubble sort.js] bubble sort')
// console.log(bubbleSort(unsortedArray))
// console.log('---------------')