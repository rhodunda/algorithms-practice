

const movies = [ 
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
]


const sortMovies = (movies) => {
  const result =   movies
    .filter(movie => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .map(m => m.title)


    console.log(result)
    
}

sortMovies(movies)