import React from 'react';
import './MoviesList.scss';
import MovieCard from '../MovieCard/MovieCard';
import movies from '../../api/movies.json';

export const MoviesList = () => (
  movies.map(movie => {
   return (
    <MovieCard
        {...movie}
        key={movie.imbdId}
      />)
  })
);
