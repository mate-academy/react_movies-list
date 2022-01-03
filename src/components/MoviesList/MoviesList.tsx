import React from 'react';
import { PropTypes } from '../types/PropTypes';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: PropTypes[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
