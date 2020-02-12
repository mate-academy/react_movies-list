import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App = listOfMovies => (
  <div className="page">
    <div className="page-content">
      <MoviesList listOfMovies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
