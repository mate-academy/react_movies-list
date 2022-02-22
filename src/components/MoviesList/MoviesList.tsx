import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  moviesList: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesList: movies }) => (
  <div className="page-content">
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movies={movie} key={movie.imdbId} />
      ))}
    </div>
  </div>
);
