import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import moviesArray from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList moviesData={moviesArray} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
