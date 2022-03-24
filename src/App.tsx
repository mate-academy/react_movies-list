import React from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Movie } from './types/movie';
import moviesFromServer from './api/movies.json';

type Props = {
  moviesFromServer?: Movie[]
};

export const App: React.FC<Props> = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
