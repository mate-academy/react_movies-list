import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { MovieCardShape } from '../../shapes/MovieCardShape';

export const MoviesList = props => (
  <>
    <div className="movies">

      {props.movies.map(movieFromServer => (
        <MovieCard
          key={movieFromServer.imdbId}
          movie={movieFromServer}
        />
      ))}

    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieCardShape),
};

MoviesList.defaultProps = {
  movies: [],
};
