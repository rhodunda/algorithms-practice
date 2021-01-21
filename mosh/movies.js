

const movies = [ 
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
]


const sortMovies = (movies) => {

    for(let i = 0; i < movies.lenght; i++) {
        console.log(movies[i].title)
    }
}

sortMovies(movies)