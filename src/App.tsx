/* eslint-disable max-len */
import { Movie } from './types/Movie';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={moviesFromServer as Movie[]} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
