import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <>
    <MoviesList movies={moviesFromServer} />

    <div className="sidebar">
      Sidebar will be here
    </div>
  </>
);
