import React from 'react';

import MovieCard from '../MovieCard/MovieCard';

import data from '../../api/movies.json';

const MoviesList = () => (
  data.map(movie => (
    <MovieCard
      key={movie.imdbId}
      title={movie.title}
      description={movie.description}
      imgUrl={movie.imgUrl}
      imdbUrl={movie.imdbUrl}
      imdbId={movie.imdbId}
    />
  ))
);

export default MoviesList;
