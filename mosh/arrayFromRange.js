

const arrayFromRange = (min, max) => {
    const arr = []

    for(let i = min; i <= max; i++) {
        arr.push(i)
    }
    return(arr) 
}

console.log(`[array from range] ${arrayFromRange(-10, 4)}`)