

const sumOfArgs = (...args) => {
        let count = 0 

        for(let i = 0; i < args.length; i++) {
            count = count += i
        }

        console.log(count)
}

console.log(`[sumOfArgs] ${sumOfArgs(1,3,5,9)}`)