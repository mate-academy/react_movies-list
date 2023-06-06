/* eslint-disable max-len */
import React from 'react';

import './App.scss';

import moviesFromServer from './api/movies.json';



export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
