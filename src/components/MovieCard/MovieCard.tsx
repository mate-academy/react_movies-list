import React from 'react';
import { MoviesList } from '../MoviesList';
import './MovieCard.scss';
import { MoviesArr } from '../../types/Movie';

export const MovieCard: React.FC<MoviesArr> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MoviesList {...movie} />
      </div>
    ))}
  </>
);
