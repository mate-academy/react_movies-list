/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';
import { MovieCard } from './components/MovieCard';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {moviesFromServer.map((movie: Movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
