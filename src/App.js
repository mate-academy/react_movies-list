import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import moviesFromServer from './api/movies';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList dataFromServer={moviesFromServer} />
    </div>
  </div>
);
