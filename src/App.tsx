/* eslint-disable max-len */
import React from 'react';
import { MovieCard } from './components/MovieCard';
import './App.scss';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MovieCard movies={moviesFromServer} />
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
