import './App.scss';
import { MovieCard } from './components/MovieCard';
// import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {/* <MoviesList {...moviesFromServer} /> */}
        {moviesFromServer.map(el => <MovieCard key={el.imdbId} {...el} />)}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
