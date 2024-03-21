/* eslint-disable max-len */
import React from 'react';
import { MoviesList } from './components/MoviesList'
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer as Movie[]} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
