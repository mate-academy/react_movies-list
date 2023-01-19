/* eslint-disable max-len */
import React from 'react';
import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => {
  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movie={moviesFromServer} />
      </div>
      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
