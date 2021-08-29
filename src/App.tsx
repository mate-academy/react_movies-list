import React from 'react';
import moviesFromServer from './api/movies.json';
import { Card } from './types/Card';
import { MoviesList } from './components/MoviesList';

import './App.scss';

type Props = {
  moviesFromServer?: Card[];
};

export const App: React.FC<Props> = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList cardsOfMovies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
