import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  moviesList: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesList = [] }) => {
  return (
    <div className="movies">
      {
        moviesList.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))
      }
    </div>
  );
};
