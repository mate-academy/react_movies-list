import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const movies = [...moviesFromServer];

const App = () => {
  return (
    <div className="page">
      <div className="page-content">
        <MoviesList property={movies} />
      </div>
      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};

export default App;
