import React from 'react';

import './App.scss';
// import { Movies } from './components/types/Movies';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

// type Props = {
//   movies: Movies[];
// };

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
