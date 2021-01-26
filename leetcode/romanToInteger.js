
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
                }
                if( romanArray[i + 1] === "I") {
                    count += 6
                    i++
                }
        }else count += 1
    }
    return count
    
}


console.log(`[roman to interger] ${toInterger(roman)}`)
