const arr = [10, 20, 30, 40, 50, 10, 30, 45, 66, -10]
const ex = 10



const except = (arr, ex) => {
   const answer =  arr.filter(num => num !== ex)
   return answer
}

console.log(`[except] ${except(arr, ex)}`)