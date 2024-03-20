/* eslint-disable max-len */
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServerimport from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServerimport} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
