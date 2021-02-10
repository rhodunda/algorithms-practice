
const subString = 'aabcafkefo'


const longestSubstring = (string) => {
    let set = new Set(),
        count = 1,
        arrayString = string.split('')
    
    
    for(let i = 0; i < arrayString.length; i++) {
       
            if(set.has(string[i]))  {
                break
            }
            else {
                set.add(string[i])
                count ++
            }
        return 
    }
    
    }

    console.log(longestSubstring(subString))
