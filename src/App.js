import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import moviesFromServer from './api/movies';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList movies={moviesFromServer} />
      </div>
    </div>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: '',
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
