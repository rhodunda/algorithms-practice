
const subString = 'abcafkefo'


const longestSubstring = (string) => {
    let set = new Set(),
        count = 0,
        arrayString = string.split('')
    
    
    for(let i = 0; i < arrayString.length; i++) {
       
            if(set.has(i))  {
                return count
            }
            else {
                set.add(i)
                count ++
            }
        
    }
    
    }

    console.log(longestSubstring(subString))
