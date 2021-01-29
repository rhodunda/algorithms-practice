
let array1 = [1,3,5,7]
let array2 = [2,4,6]


const findMedium = (arr1, arr2) => {

    let combined = [...arr1, ...arr2].sort()

//     [1, 2, 3, 4, 5, 6, 7, 8]
//      i->              <-j
   for(let i = 0; i < combined.length; i++) {
       for(let j = combined.length; j < 0; j--) {
                if(combined[i] === combined[j]) {
                    console.log('one')
                    console.log(combined[j], combined[i])
                    return combined[j]
                }
                if(combined[j] < combined[i]) {
                    console.log('two')
                    let answer = combined[j - 1] + combined[i - 1] / 2
                    console.log(answer)
                }
       }
   }
}

console.log(findMedium(array1, array2))