import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const movies = [...moviesFromServer];

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList films={movies} />
    </div>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
