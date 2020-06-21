import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App = () => (
  <MoviesList content={moviesFromServer} />
);
