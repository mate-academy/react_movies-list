import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  moviesList: Movie[],
};

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(movie => {
      const movieNormalized: Omit<Movie, 'imdbId'> = { ...movie };

      return (
        <MovieCard
          key={movie.imdbId}
          movie={movieNormalized}
        />
      );
    })}
  </div>
);
