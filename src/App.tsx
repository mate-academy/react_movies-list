/* eslint-disable max-len */
import React from 'react';
import moviesFromServer from './api/movies.json';
import { SideBar } from './components/SideBar/SideBar';
import { MoviesList } from './components/MoviesList';

import './App.scss';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <SideBar />
  </div>

);
