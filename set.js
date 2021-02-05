const arr = [1,2,3,3]

// set's only show the same number onces
const set = new Set(arr)

console.log(arr)
console.log(set)

// to turn a set back into an array
const setToArray = [...set]


// add 
set.add(6)
set.add('6')
set.add({ name: 'bryan'})

//delete
set.delete(6)
set.delete('6')
set.delete({ name: 'bryan'})

//clear
set.clear()

//has       returns true or false
set.has(5)

//size
set.size()

