import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movies } from '../../types/Movie';
import './MoviesList.scss';

export const MoviesList: React.FC<Movies> = ({ allMovie }) => (
  <>
    {allMovie.map(movie => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </>
);
