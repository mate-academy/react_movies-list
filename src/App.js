import React from 'react';
import { MoviesList } from './components/MoviesList';
import './App.scss';

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
