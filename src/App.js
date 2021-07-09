import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
// import moviesFromServer from './api/movies';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList />
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
