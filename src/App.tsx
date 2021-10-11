import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MovieList movies={moviesFromServer} />
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
