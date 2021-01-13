import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <Sidebar />
  </div>
);
