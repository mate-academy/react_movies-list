import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import moviesFromServer from './api/movies.json';
import MoviesList from './components/MoviesList/MoviesList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);

App.prototype = {
  moviesFromServer: PropTypes.array.isRequired,
};
