import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="wrapper">
    <MoviesList MoviesListArr={moviesFromServer} />
  </div>
);
