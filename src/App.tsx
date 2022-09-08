import React from 'react';
import './App.scss';
import moviesFromServerfrom from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (

  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServerfrom} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
