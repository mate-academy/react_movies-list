import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { ListShape } from '../shapes/ListShape';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imbdId} />
    ))}
  </div>
);

MoviesList.propTypes = ListShape;
