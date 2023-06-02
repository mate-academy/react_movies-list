/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <MoviesList movies={moviesFromServer} />
);
