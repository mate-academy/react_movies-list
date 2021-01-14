import React from 'react';
import { MoviesList } from './components/MoviesList';
import './App.scss';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">

        <MoviesList movies={moviesFromServer} />

      </div>
    </div>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
