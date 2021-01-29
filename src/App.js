import React from 'react';
import './App.scss';

import PropTypes from 'prop-types';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
// import { MovieCard } from './components/MovieCard';

export const App = () => (

  <div className="page">
    <><MoviesList movies={moviesFromServer} /></>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
