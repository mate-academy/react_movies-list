import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Sidebar } from './components/Sidebar';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList moviesList={moviesFromServer} />
    </div>

    <Sidebar />
  </div>
);
