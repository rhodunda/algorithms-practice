
// convert the roman number symbols to numbers


// symbol --- value
//     I --- 1
//     V --- 5
//     X --- 10
//     L --- 50
//     C --- 100
//     D --- 500
//     M --- 1000

// I can be place before a V and X to make 4 or 9
// x can be place before a L and C to make 40 or 90
// C can be place before a D and M to make 400 or 900

const roman = "IIIV"



const toInterger = (roman) => {

    let romanArray = roman.split("")
    let count = 0

    for(let i = 0; i < romanArray.length; i++) {
        if(romanArray[i] === "V") {
                if(romanArray[i - 1] === "I") {
                    count += 3
                }else count += 5

        if(romanArray[i] === "X") {
            if(romanArray[i - 1] === "I") {
                count += 8
            }else count += 10
        }
        if(romanArray[i] === "L") {
            if(romanArray[i - 1] === "X") {
                count += 30
            }else count += 50
    }
        if(romanArray[i] === "C") {
            if(romanArray[i - 1] === "X") {
                count += 80
            }else count += 100
}
        if(romanArray[i] === "D") {
            if(romanArray[i - 1] === "C") {
                count += 300
            }else count += 500
}
        if(romanArray[i] === "D") {
            if(romanArray[i - 1] === "C") {
                count += 300
            }else count += 500
}
        if(romanArray[i] === "D") {
            if(romanArray[i - 1] === "C") {
                count += 800
            }else count += 1000
}
    
        }else count += 1
    }
        return count
}

console.log(`[roman to interger] ${toInterger(roman)}`)

// Better switch and case answer I used for LeetCode




// var romanToInt = function(s) {
    
//     const symbolArray = s.split("")
//     let count = 0
    
//     for(let i = 0; i < symbolArray.length; i++ ) {
        
//         switch(symbolArray[i]){
//             case "V":
//                 if(symbolArray[i - 1] === "I")
//                     count += 3
                
//                 else count += 5
                
//                 break;
                
//             case "X":
//                 if(symbolArray[i - 1] === "I")
//                     count += 8
                
//                 else count += 10
                
//                 break;
            
//             case "L":
//                  if(symbolArray[i - 1] === "X")
//                     count += 30
                
//                 else count += 50
                
//                 break;
                
//             case "C":
//                  if(symbolArray[i - 1] === "X")
//                     count += 80
                
//                 else count += 100
                
//                 break;
                
//             case "D":
//                  if(symbolArray[i - 1] === "C")
//                     count += 300
                
//                 else count += 500
                
//                 break;
            
//             case "M":
//                  if(symbolArray[i - 1] === "C")
//                     count += 800
                
//                 else count += 1000
                
//                 break;
//             default:
//                 count += 1
//         }
//     }
//     return count
// };
