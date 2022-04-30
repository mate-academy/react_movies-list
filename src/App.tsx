import React from 'react';
import { MoviesList } from './components/MoviesList';
import ServerDataMoviesList from './api/movies.json';

import './App.scss';

/* eslint-disable max-len */
export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList moviesData={ServerDataMoviesList} />
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
