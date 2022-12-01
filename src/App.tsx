/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
// import { Movie } from './types/Movie';

// type Movies = {
//   props: Movie[]
// };

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList props={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
