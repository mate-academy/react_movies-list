import React from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList moviesListAPI={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
