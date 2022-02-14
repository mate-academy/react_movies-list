import React from 'react';

import './App.scss';
import filmsFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList films={filmsFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
