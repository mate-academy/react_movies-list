import React from 'react';
import { MoviesList } from './components/MoviesList';

import './App.scss';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList Props={moviesFromServer} />
      </div>
    </div>

    <div className="sidebar">Sidebar will be here</div>
  </div>
);
