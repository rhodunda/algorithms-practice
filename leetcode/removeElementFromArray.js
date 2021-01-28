

const value = 3
let array = [3,3,5,6,2]
             

const removeElement = (arr, val) => {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            arr.slice([i], 1)
            i--
        }
    }
}