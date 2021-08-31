import React from 'react';
import { MovieTypes } from '../../types/MovieTypes';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: MovieTypes[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
