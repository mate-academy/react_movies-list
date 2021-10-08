import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList/index';

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
