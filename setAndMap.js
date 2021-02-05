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
set.size

/////////////////////////////////////////////////////////////////////

// Map      searching my keys

const map = new Map([['name', 'Bryan'], ['last name', 'Rhodunda']])

// map can take objects without overwriting them
const a = {}
const b = {}

const myMap = new Map([[a, 'a'],[b, 'b']])
console.log(myMap)


// set
myMap.set('c', '3')

// delete
myMap.delete('c')

// clear
myMap.clear()

// has       returns true or false
myMap.has('c')


// size
myMap.size