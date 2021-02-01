// convert the integer given to roman numerables
//
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


let integer = 700


const ToRoman = (int) => {
        // int = 734
    let roman = []
    if(int > 500) {
        let current = int % 500 
        // roman = 'D' = 500
        // overFive = 234
        roman.push('D')
    }if(current > 100){
        if(current > 400) {
            
    }
    
}
}

console.log('--------')
console.log(ToRoman(integer))
console.log('--------')