/* eslint-disable max-len */

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page__content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
