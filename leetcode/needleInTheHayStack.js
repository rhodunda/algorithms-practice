
const hayStack = 'apple'
const needle = 'pp'

// if neddle in found return starting index
// if  needle empty return 0
// if they are the same return 0
// if not found return -1

const findNeedle = (hay, needle) => {

   if(needle === '') return 0

   if(needle === hay) return 0

   for(let i = 0; i >= hay.length - needle.length; i++) {
       // did hay.length - needle.length because its not possable after that point

       if(needle === hay.substring(i, i+needle.length)) {
           return i
       } else return -1
   }
}