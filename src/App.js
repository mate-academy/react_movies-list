import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList />
    </div>

    <Sidebar />
  </div>
);
