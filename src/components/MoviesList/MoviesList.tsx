import React from 'react';

import './MoviesList.scss';

import moviesFromServer from '../../api/movies.json';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC = () => (
  <>
    {moviesFromServer.map((movie) => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </>
);
