import React from 'react';
import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';

import './App.scss';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList cardsOfMovies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
