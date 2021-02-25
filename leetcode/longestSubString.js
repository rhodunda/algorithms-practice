
const subString = 'aabcafkefo'


const longestSubstring = (string) => {
    let set = new Set(),
        count = 1,
        arrayString = string.split('')
    
    
    for(let i = 0; i < arrayString.length; i++) {
       
            if(set.has(string[i]))  {
                return count
            }
            else {
                set.add(string[i])
                count ++
            }
        
    }
    
    }

    console.log(longestSubstring(subString))
