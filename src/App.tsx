import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MoviesList';
import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
    <div className="sidebar">Sidebar will be here</div>
  </div>
);
