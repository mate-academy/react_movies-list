import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    <div className="page-content">
      <ul className="movies">
        {
          movies.map(film => (
            <li className="card" key={movies.imdbId}>
              <MovieCard {...film} />
            </li>
          ))
        }
      </ul>
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
