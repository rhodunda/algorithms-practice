const show = 10


// show all numbers from 0 to show
// display if there odd or even


const showNumbers = (show) => {

    console.log("[show numbers]----------------")

    for(let i = 0; i <= show; i++) {    
      let message =  i % 2 === 0 ?  "EVEN" :  'ODD'
        console.log(i, message)
    }
        
}


console.log(showNumbers(show))
console.log('--------------------')