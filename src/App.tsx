import React from 'react';
import './App.scss';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar">
      <h3 className="sidebar__text">
        Your advertising can be here!
      </h3>
    </div>
  </div>
);
