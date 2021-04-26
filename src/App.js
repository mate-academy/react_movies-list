import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieCard } from './components/MovieCard';
import { SideBar } from './components/SideBar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieCard movies={moviesFromServer} />
    </div>

    <SideBar />
  </div>
);
