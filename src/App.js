import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import movieFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={movieFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
