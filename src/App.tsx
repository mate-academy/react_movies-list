/* eslint-disable max-len */
import React from 'react';
import { Movie } from './types/Movie';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

interface MovieProps {
  movie: Movie;
}

export const App: React.FC<MovieProps> = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
      <MoviesList moviesFromServer={moviesFromServer} />
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
