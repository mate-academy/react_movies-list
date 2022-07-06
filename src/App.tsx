import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

/* eslint-disable max-len */
export const App: React.FC = () => {
  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={moviesFromServer} />
      </div>

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
