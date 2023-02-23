/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <Sidebar />
  </div>
);
