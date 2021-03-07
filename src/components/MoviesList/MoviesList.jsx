import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ listOfFilms }) => (
  <>
    <div className="page-content">
      <ul className="movies">
        {listOfFilms.map(film => (
          <li className="card" key={listOfFilms.imdbId}>
            <MovieCard {...film} />
          </li>
        ))}
      </ul>
    </div>
  </>
);

MoviesList.propTypes = {
  listOfFilms: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.number.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  listOfFilms: [],
};
