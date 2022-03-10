import React from 'react';

import { MoviesList } from './components/MoviesList';

import './App.scss';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <MoviesList movies={moviesFromServer} />
);
