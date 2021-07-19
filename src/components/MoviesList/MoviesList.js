import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    {
      movies.map(
        movie => (
          <React.Fragment key={movie.imdbId}>
            <MovieCard {...movie} />
          </React.Fragment>
        ),
      )
    }
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
