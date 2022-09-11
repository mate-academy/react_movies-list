import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
