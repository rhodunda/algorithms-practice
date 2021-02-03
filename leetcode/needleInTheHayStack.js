
const hayStack = 'apple'
const needle = 'pp'

// if neddle in found return 1
// if empty return 0
// if not found return -1

const findNeedle = (hay, needle) => {

    if(hay === '' || needle === '') {
        return 0
    }
    const hayArray = hay.split('')
    const needleLength = needle.length

    for(let i = 0; i < hayArray.length; i++) {
        // looping through hay stack
        // need to check of needle appears.
        for(let j = 0; j < hayArray.length; j++) {
            
            let checkArray = hay[i] + hay[i + 1] 
            let checkString = checkArray.join('')
            if(checkString === needle) {
                return 1
                
            }else return -1
        }
    }
}