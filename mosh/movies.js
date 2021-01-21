

const movies = [ 
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
]


const sortMovies = (movies) => {
    const container = []

    for(let i = 0; i < movies.length; i++) {
            if(movies[i].rating > 4) {
                    container.push(movies[i])
            }
    }

    container.map( movie => {
        movie.rating.sort()
    })
    console.log(container)

}

sortMovies(movies)