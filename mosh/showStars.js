

const showStars = (rows) => {
        
    let pattern = ''
for(let i = 1; i <= rows; i++) {
        for(let j = 0; j < i; j++) {
            pattern += '*'
            return pattern
        }
    }
}



console.log(`[show star] ${showStars(10)}`)