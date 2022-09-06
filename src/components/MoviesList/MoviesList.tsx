import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  moviesLi: Movie[],
};

export const MoviesList: React.FC <Props> = ({ moviesLi }) => (
  <div className="movies">
    {moviesLi.map(movie => <MovieCard movieCard={movie} key={movie.imdbId} />)}
  </div>
);
