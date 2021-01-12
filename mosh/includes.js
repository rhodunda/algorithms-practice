const array = [10, 49, 55, -19]

const includes = (array, searchElement) => {
    for(let element of array) {
        if(element === searchElement) 
            return true
                return false
    }
}

console.log(`[includes] ${includes(array, 10)}`)