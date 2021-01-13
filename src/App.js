import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MoviesList/MoviesList';

export const App = () => (
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
