/* eslint-disable max-len */
import React from 'react';
import MoviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import './App.scss';

export const App: React.FC = () => (
  <>
    <div className="page">
      <div className="page-content">
        <MoviesList movies={MoviesFromServer} />
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </>
);
