import React from 'react';
import movies from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import './App.scss';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={movies} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
