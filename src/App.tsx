/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  </div>
);
