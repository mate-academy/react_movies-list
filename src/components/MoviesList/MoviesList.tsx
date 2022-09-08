import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/index';

type Props = {
  movies : Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (

  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />

    ))}
  </div>

);
