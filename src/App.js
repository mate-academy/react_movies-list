import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <MoviesList listOfFilms={moviesFromServer} />
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
