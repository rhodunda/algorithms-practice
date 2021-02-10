
const array = [1,2,4,6]
const sum = 8


const hasPairWithSum = (arr, sum) => {

let set = new Set()


    for(let i = 0; i < arr.length; i++) {
        
        let num  = sum - i
        if(set.has(i)) {
            return true
        } else {
            set.add(num)
        }
    }
}



