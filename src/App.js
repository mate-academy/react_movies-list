import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
