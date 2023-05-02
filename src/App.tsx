import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Movie } from './types/Movie';

type Props = {
  movies: Movie [];
};

export const App: React.FC<Props> = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
export default App;
//
