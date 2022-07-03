import React from 'react';
import { MoviesList } from './components/MoviesList';
import './App.scss';
import moviesFromServ from './api/movies.json';

/* eslint-disable max-len */
export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServ}/>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
