import React from 'react';
import './App.scss';
import MovieList from './components/MoviesList/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <MovieList moviesFromServer={moviesFromServer} />
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
