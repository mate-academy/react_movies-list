import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
// import moviesFromServer from './api/movies.json';
import MovieFromServer from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={MovieFromServer} />
      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  </div>
);
