import React from 'react';
import moviesFromServer from './api/movies';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList films={moviesFromServer} />
      </div>
    </div>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
