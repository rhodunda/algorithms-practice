
const movie = {
    title: "bat man",
    releaseYear: 2020,
    rating: 5,
    director: 'rhodunda'
}

// show all string types

const showPerperties = (movie) => {
    for (let key in movies) {
        if( typeof movie[key] === 'string')
        console.log(key, movie[key])
    }
}